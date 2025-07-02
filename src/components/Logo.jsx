import React from "react";

function Logo({ width = "100px" }) {
  return (
    <img
      className="w-16 h-16 rounded-md"
      src="https://plus.unsplash.com/premium_vector-1722145193346-54c0c59c52e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZsb3dlciUyMGJsb29tfGVufDB8fDB8fHww"
      alt="Logo"
    />
  );
}

export default Logo;
