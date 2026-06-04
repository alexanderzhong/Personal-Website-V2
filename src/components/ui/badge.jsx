import React from "react";

export function Badge({ variant = "default", className = "", ...props }) {
  return (
    <span
      className={["ui-badge", `ui-badge-${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export default Badge;
