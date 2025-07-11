// // import React from "react";
// // import { Container, Logo, LogoutBtn } from "../index";
// // import { Link } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";

// // function Header() {
// //   const authStatus = useSelector((state) => state.auth.status);

// //   const navigate = useNavigate();

// //   const navItems = [
// //     {
// //       name: "Home",
// //       slug: "/",
// //       active: true,
// //     },
// //     {
// //       name: "Login",
// //       slug: "/login",
// //       active: !authStatus,
// //     },
// //     {
// //       name: "Signup",
// //       slug: "/signup",
// //       active: !authStatus,
// //     },
// //     {
// //       name: "All Posts",
// //       slug: "/all-posts",
// //       active: authStatus,
// //     },
// //     {
// //       name: "Add Post",
// //       slug: "/add-post",
// //       active: authStatus,
// //     },
// //   ];

// //   return (
// //     <header className="py-3 shadow bg-gray-500">
// //       <Container>
// //         <nav className="flex">
// //           <div className="mr-4">
// //             <Link to="/">
// //               <Logo width="70px" />
// //             </Link>
// //           </div>
// //           <div className="py-3 ml-4 text-2xl" style={{ color: "#8FDDE7" }}>
// //             MegaBlog
// //           </div>
// //           <ul className="flex ml-auto">
// //             {navItems.map((item) =>
// //               item.active ? (
// //                 <li key={item.name}>
// //                   <button
// //                     className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
// //                     onClick={() => navigate(item.slug)}
// //                   >
// //                     {item.name}
// //                   </button>
// //                 </li>
// //               ) : null
// //             )}
// //           </ul>
// //           {authStatus && (
// //             <li className="list-none">
// //               <LogoutBtn />
// //             </li>
// //           )}
// //         </nav>
// //       </Container>
// //     </header>
// //   );
// // }

// // export default Header;

// import React from "react";
// import { Container, Logo, LogoutBtn } from "../index";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//       active: true,
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//   ];

//   return (
//     <header className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 shadow-lg sticky top-0 z-50">
//       <Container>
//         <nav className="flex flex-wrap items-center justify-between py-2 sm:py-4 px-2 sm:px-6">
//           {/* Left Logo + Title */}
//           <div className="flex items-center space-x-3">
//             <Link to="/">
//               <Logo className="w-14 sm:w-20 md:w-24 hover:scale-105 transition-transform duration-300" />
//             </Link>
//             <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
//               MegaBlog
//             </h1>
//           </div>

//           {/* Navigation Buttons */}
//           <ul className="flex flex-wrap items-center space-x-2 mt-4 sm:mt-0 sm:space-x-4">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className={`px-4 py-2 text-sm sm:text-base rounded-full transition duration-300 ease-in-out ${
//                       location.pathname === item.slug
//                         ? "bg-blue-500 text-white shadow-md"
//                         : "hover:bg-blue-100 text-gray-900"
//                     }`}
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li className="list-none ml-2">
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // Scroll Down → Hide
      } else {
        setShowHeader(true); // Scroll Up → Show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header
      className={`bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 shadow-lg sticky top-0 z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <nav className="flex flex-wrap items-center justify-between py-2 sm:py-4 px-2 sm:px-6">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Logo className="w-14 sm:w-20 md:w-24 hover:scale-105 transition-transform duration-300" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              MegaBlog
            </h1>
          </div>

          {/* Navigation Items */}
          <ul className="flex flex-wrap items-center space-x-2 mt-4 sm:mt-0 sm:space-x-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={`${item.name}-${item.slug}`}>
                    <button
                      onClick={() => navigate(item.slug)}
                      aria-label={`Go to ${item.name} page`}
                      className={`px-4 py-2 text-sm sm:text-base rounded-full transition duration-300 ease-in-out ${
                        location.pathname === item.slug
                          ? "bg-blue-500 text-white shadow-md"
                          : "hover:bg-blue-100 text-gray-900"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li className="list-none ml-2">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
