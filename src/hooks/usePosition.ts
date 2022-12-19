import React, { useState, useEffect } from "react";

type TPosition = {
  left: number;
  top: number;
};

const usePosition = (
  elementRef: React.RefObject<HTMLButtonElement>,
  spacing = 0
): TPosition => {
  const [dropdownPosition, setDropdownPosition] = useState<TPosition>({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    const {
      left = 0,
      top = 0,
      height = 0,
    } = elementRef.current?.getBoundingClientRect() ?? {};

    setDropdownPosition({ left, top: top + height + spacing });
  }, [elementRef, spacing]);

  return dropdownPosition;
};

export default usePosition;
