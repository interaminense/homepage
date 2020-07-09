import React from "react";
import classNames from "classnames";

const Column = ({ children, size }) => (
  <div
    className={classNames("Layout__column", "col col-xs-12", {
      [`Layout__column--${size}`]: size,
      [`col-sm-${size}`]: size,
    })}
  >
    {children}
  </div>
);

const Row = ({ children }) => <div className="row no-baseline">{children}</div>;

const Layout = ({ className, children }) => (
  <div className={classNames("Layout", className)}>{children}</div>
);

Layout.Column = Column;
Layout.Row = Row;

export default Layout;
