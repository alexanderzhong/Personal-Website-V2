import React from "react";

export function SelectField({
  label,
  className = "",
  hideLabel = false,
  children,
  ...props
}) {
  return (
    <label className={`ui-select-field ${className}`.trim()}>
      {label && (
        <span className={hideLabel ? "ui-select-label-sr" : ""}>{label}</span>
      )}
      <span className="ui-select-trigger">
        <select className="ui-select" {...props}>
          {children}
        </select>
        <svg
          className="ui-select-chevron"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </label>
  );
}

export default SelectField;
