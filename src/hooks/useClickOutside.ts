import React, { useEffect } from "react";

const useOnClickOutside = (
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  ...elementRefs: React.RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const listener = <TEvent extends React.ChangeEvent<HTMLInputElement>>(
      event: TEvent
    ) => {
      // Do nothing if clicking ref's element or descendent elements
      const containsTarget = elementRefs.some(
        (elementRef) => !!elementRef?.current?.contains(event.target)
      );

      if (containsTarget) return;

      handler(event);
    };

    document.addEventListener(
      "mousedown",
      listener as (event: MouseEvent) => void
    );
    document.addEventListener(
      "touchstart",
      listener as (event: TouchEvent) => void
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        listener as (event: MouseEvent) => void
      );
      document.removeEventListener(
        "touchstart",
        listener as (event: TouchEvent) => void
      );
    };
  }, [handler, elementRefs]);
};

export default useOnClickOutside;
