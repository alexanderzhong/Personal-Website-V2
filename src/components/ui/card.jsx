import React from "react";

export function Card({ as: Component = "div", className = "", ...props }) {
  return <Component className={`ui-card ${className}`.trim()} {...props} />;
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`ui-card-header ${className}`.trim()} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`ui-card-content ${className}`.trim()} {...props} />;
}

export default Card;
