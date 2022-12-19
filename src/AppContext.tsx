import React, { createContext, useReducer } from "react";
import { TTheme } from "./types";
import { getTheme } from "./utils/utils";

enum ActionTypes {
  ToggleTheme = "TOGGLE_THEME",
  SetKeyword = "SET_KEYWORD",
}

type TInitialState = {
  theme?: TTheme;
  keyword?: string;
};

type TPayload = {
  [K in keyof TInitialState]: TInitialState[K];
};

type TAction = {
  payload: TPayload;
  type: ActionTypes;
};

type TToggleTheme = (params: { theme: TTheme }) => void;

type TSetKeyword = (params: { keyword: string }) => void;

type TContextValue = TPayload & TActionsFn;

type TActionsFn = {
  toggleTheme: TToggleTheme;
  setKeyword: TSetKeyword;
};

const initialState: TInitialState = {
  theme: getTheme(),
  keyword: "",
};

const AppContext = createContext<TInitialState & TActionsFn>({
  ...initialState,
  toggleTheme: () => {},
  setKeyword: () => {},
});

const actionHandlers = {
  [ActionTypes.ToggleTheme]: (
    state: TInitialState,
    { payload: { theme } }: TAction
  ): TInitialState => {
    return {
      ...state,
      theme,
    };
  },
  [ActionTypes.SetKeyword]: (
    state: TInitialState,
    { payload: { keyword } }: TAction
  ): TInitialState => {
    return {
      ...state,
      keyword,
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

export const AppContextProvider: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: TContextValue = {
    ...state,
    setKeyword: (payload) =>
      dispatch({ type: ActionTypes.SetKeyword, payload }),
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
