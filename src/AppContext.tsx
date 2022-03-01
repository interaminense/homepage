import React, { createContext, useReducer } from "react";
import { TTheme } from "./types";
import { getTheme } from "./utils/utils";

enum ActionTypes {
  ToggleTheme = "TOGGLE_THEME",
}

type TInitialState = {
  theme: TTheme;
};

type TPayload = {
  [K in keyof TInitialState]: TInitialState[K];
};

type TAction = {
  payload: TPayload;
  type: ActionTypes;
};

type TToggleTheme = (params: { theme: TTheme }) => void;

type TContextValue = TPayload & TActionsFn;

type TActionsFn = {
  toggleTheme: TToggleTheme;
};

const initialState: TInitialState = {
  theme: getTheme(),
};

const AppContext = createContext<TInitialState & TActionsFn>({
  ...initialState,
  toggleTheme: () => {},
});

const actionHandlers = {
  [ActionTypes.ToggleTheme]: (
    state: TInitialState,
    action: TAction
  ): TInitialState => {
    console.log(action.payload.theme);

    return {
      ...state,
      theme: action.payload.theme,
    };
  },
};

const reducer = (state: TInitialState, action: TAction): TInitialState => {
  const handlerFn = actionHandlers[action.type];

  if (handlerFn) {
    return handlerFn(state, action);
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

export const AppContextProvider: React.FC<React.HTMLAttributes<
  HTMLElement
>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: TContextValue = {
    ...state,
    toggleTheme: (payload) =>
      dispatch({
        type: ActionTypes.ToggleTheme,
        payload,
      }),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
