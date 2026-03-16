import React from "react";

export default function Button({ as: Component = "a", className = "", children, ...props }) {
  return (
    <Component
      className={`inline-block px-5 py-2.5 text-base bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}