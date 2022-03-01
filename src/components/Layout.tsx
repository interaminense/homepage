import React from "react";
import classNames from "classnames";
import { TLayoutSize } from "../types";

interface IColumnProps extends React.HTMLAttributes<HTMLElement> {
  size: TLayoutSize;
}

const Column: React.FC<IColumnProps> = ({ children, size }) => (
  <div
    className={classNames("Layout__column", "col col-xs-12", {
      [`Layout__column--${size}`]: size,
      [`col-sm-${size}`]: size,
    })}
  >
    {children}
  </div>
);

const Row: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => (
  <div className="row no-baseline">{children}</div>
);

const Layout: React.FC<React.HTMLAttributes<HTMLElement>> & {
  Column: typeof Column;
  Row: typeof Row;
} = ({ className, children }) => (
  <div className={classNames("Layout", className)}>{children}</div>
);

Layout.Column = Column;
Layout.Row = Row;

export default Layout;
