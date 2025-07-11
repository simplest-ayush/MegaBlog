// import React, { useId } from "react";

// const Input = React.forwardRef(function Input({
//     label,
//     type = "text",
//     className = "",
//     ...props
// },ref) {
//   const id = useId();
//   return (
//     <div className="w-full">
//       {label && (
//         <label className="inline-block mb-1 pl-1" htmlFor={id}>
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//         ref={ref}
//         {...props}
//         id={id}
//       />
//     </div>
//   );
// });

// export default Input;

import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none border w-full transition-all duration-200 
          focus:bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400
          ${error ? "border-red-500 focus:ring-red-400" : "border-gray-200"}
          ${className}`}
        ref={ref}
        {...props}
        id={id}
        aria-invalid={error ? "true" : "false"}
      />
      {error && (
        <p className="mt-1 pl-1 text-sm text-red-600">
          {error.message || "This field is required."}
        </p>
      )}
    </div>
  );
});

export default Input;
