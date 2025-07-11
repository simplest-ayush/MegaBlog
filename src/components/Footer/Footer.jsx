// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../Logo";

// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
//       <div className="relative z-10 mx-auto max-w-7xl px-4">
//         <div className="-m-6 flex flex-wrap">
//           <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//             <div className="flex h-full flex-col justify-between">
//               <div className="mb-4 inline-flex items-center">
//                 <Logo width="100px" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">
//                   &copy; Copyright 2023. All Rights Reserved by DevUI.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Company
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Features
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Affiliate Program
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Press Kit
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Support
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Account
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Help
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Customer Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Legals
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Terms &amp; Conditions
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Licensing
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
              <Logo className="w-24 sm:w-32 md:w-40" />
            </div>
            <hr className="my-4 border-gray-300" />
            <p className="text-xs sm:text-sm text-gray-600">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wide">
              Company
            </h3>
            <ul>
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item, idx) => (
                  <li key={idx} className="mb-3">
                    <Link
                      to="/"
                      className="break-words text-sm sm:text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wide">
              Support
            </h3>
            <ul>
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item, idx) => (
                  <li key={idx} className="mb-3">
                    <Link
                      to="/"
                      className="break-words text-sm sm:text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wide">
              Legals
            </h3>
            <ul>
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item, idx) => (
                  <li key={idx} className="mb-3">
                    <Link
                      to="/"
                      className="break-words text-sm sm:text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
