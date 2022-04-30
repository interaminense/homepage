import classNames from "classnames";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import useOnClickOutside from "../hooks/useClickOutside";
import usePosition from "../hooks/usePosition";

interface IDropdownProps extends React.HTMLAttributes<HTMLElement> {
  active: boolean;
  trigger: React.ReactElement;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<IDropdownProps> & { Item: typeof DropdownItem } = ({
  active,
  children,
  setActive,
  trigger,
}) => {
  const triggerElementRef = useRef<HTMLButtonElement>(null);
  const dropdownElementRef = useRef<HTMLDivElement>(null);
  const dropdownItemsElementRef = useRef<HTMLUListElement>(null);

  const dropdownPosition = usePosition(triggerElementRef, 10);

  useOnClickOutside(
    () => setActive(false),
    dropdownElementRef,
    dropdownItemsElementRef
  );

  return (
    <div className="Dropdown" ref={dropdownElementRef}>
      {React.cloneElement(trigger, {
        className: classNames("Dropdown__trigger", trigger.props.className),
        onClick: () => setActive(!active),
        ref: triggerElementRef,
      })}

      {ReactDOM.createPortal(
        active && (
          <ul
            className="Dropdown__items"
            style={{ ...dropdownPosition }}
            ref={dropdownItemsElementRef}
          >
            {children}
          </ul>
        ),
        document.querySelector("#root") as HTMLElement
      )}
    </div>
  );
};

interface IDropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
  onItemClick: () => void;
}

const DropdownItem: React.FC<IDropdownItemProps> = ({
  children,
  onItemClick,
}) => (
  <li
    className={classNames("Dropdown__item", {
      "Dropdown__item--has-button": !!onItemClick,
    })}
  >
    {!!onItemClick ? (
      <button onClick={() => onItemClick()}>{children}</button>
    ) : (
      children
    )}
  </li>
);

Dropdown.Item = DropdownItem;

export default Dropdown;
