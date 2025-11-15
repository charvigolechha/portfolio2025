import React from "react";

export default function Button({ as: Component = "a", className = "", children, ...props }) {
  return (
    <Component
      className={`inline-block px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}