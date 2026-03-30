import React from "react";

export default function Button({ as: Component = "a", className = "", children, ...props }) {
  return (
    <Component
      className={`inline-flex items-center gap-2 px-5 py-2.5 text-base bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-900 transition-colors ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}