import React from "react";

export function Sheet({ side = "right", className = "", ...props }) {
  return (
    <div
      className={["ui-sheet-overlay", `ui-sheet-${side}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function SheetContent({
  as: Component = "div",
  className = "",
  ...props
}) {
  return (
    <Component className={`ui-sheet-content ${className}`.trim()} {...props} />
  );
}

export function SheetHeader({ className = "", ...props }) {
  return <div className={`ui-sheet-header ${className}`.trim()} {...props} />;
}
