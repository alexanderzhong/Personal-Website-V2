import React from "react";

export function Button({
  as: Component = "button",
  variant = "default",
  className = "",
  type,
  ...props
}) {
  const classes = ["ui-button", `ui-button-${variant}`, className]
    .filter(Boolean)
    .join(" ");
  const buttonType = Component === "button" ? type || "button" : type;

  return <Component className={classes} type={buttonType} {...props} />;
}

export default Button;
