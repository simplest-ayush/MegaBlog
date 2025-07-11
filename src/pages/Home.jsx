// // import React, { useEffect, useState } from "react";
// // import appwriteService from "../appwrite/configDatabase";
// // import { Container, PostCard } from "../components";

// // function Home() {
// //   const [posts, setPosts] = useState([]);
// //   useEffect(() => {
// //     appwriteService.getPosts().then((posts) => {
// //       if (posts) {
// //         setPosts(posts.documents);
// //       }
// //     });
// //   }, []);

// //   if (posts.length === 0) {
// //     return (
// //       <div className="w-full py-8 mt-4 text-center">
// //         <Container>
// //           <div className="flex flex-wrap">
// //             <div className="p-2 w-full">
// //               <h1 className="text-2xl font-bold hover:text-gray-500">
// //                 Login to read posts
// //               </h1>
// //             </div>
// //           </div>
// //         </Container>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="w-full p-8">
// //       <Container>
// //         <div className="flex flex-wrap">
// //           {posts.map((post) => {
// //             <div key={post.$id} className="p-2 w-1/4">
// //               <PostCard {...post} />
// //             </div>;
// //           })}
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default Home;

// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/configDatabase";
// import authService from "../appwrite/auth";
// import { Container, PostCard } from "../components";

// function Home() {
//   const [posts, setPosts] = useState([]);

//   // this is just for accessing the current user
//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await authService.getCurrentUser();
//       // console.log(user);
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (posts.length === 0) {
//     return (
//       <div
//         className="min-h-screen flex items-center justify-center relative py-8 mt-4"
//         style={{
//           backgroundImage: "url('/blog1.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
//           <Container className="bg-white/80 shadow-xl rounded-2xl p-10 max-w-2xl mx-auto">
//             {/* <div className="flex flex-wrap">
//             <div className="p-2 w-full">
//               <h1 className="text-2xl font-bold hover:text-gray-500">
//                 Login to read posts
//               </h1> */}
//             {/* <h1 className="text-3xl font-bold mb-4">Welcome to MegaBlog!</h1>
//               <p className="text-lg text-gray-600 mb-8">
//                 Join our community to read, write, and share amazing posts. Sign
//                 up or log in to get started!
//               </p>
//               <ul className="mb-8 text-left max-w-md mx-auto">
//                 <li>✅ Read posts from the community</li>
//                 <li>✅ Write your own blogs and share your thoughts</li>
//                 <li>✅ Like and comment on posts</li>
//                 <li>✅ Manage your profile and posts</li>
//               </ul> */}
//             {/* <div className="flex justify-center gap-4 mb-8">
//                 <a
//                   href="/login"
//                   className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//                 >
//                   Login
//                 </a>
//                 <a
//                   href="/signup"
//                   className="bg-gray-200 text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-300"
//                 >
//                   Sign Up
//                 </a>
//               </div> */}
//             {/* </div> */}
//             {/* </div> */}
//             <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-green-500 text-transparent bg-clip-text">
//               Welcome to Blog World!
//             </h1>
//             <p className="text-lg text-white mb-8">
//               Discover, share, and connect with bloggers around the world.
//               <br />
//               Sign up or log in to join the conversation!
//               <br />
//               <br />
//               <span className="font-semibold text-blue-600">
//                 ✨ Unleash your creativity and inspire others with your stories.
//               </span>
//               <br />
//               <span className="font-semibold text-purple-600">
//                 🚀 Stay updated with trending topics and featured writers.
//               </span>
//               <br />
//               <span className="font-semibold text-pink-600">
//                 🌟 Build your personal brand and grow your audience.
//               </span>
//               <br />
//               <span className="font-semibold text-green-600">
//                 💡 Learn, engage, and be part of a vibrant blogging community!
//               </span>
//             </p>

//             <ul
//               className="mb-8 text-left max-w-md mx-auto space-y-3"
//               style={{ color: "#F4EAE6" }}
//             >
//               <li className="flex items-center gap-2">
//                 <span>📝</span> Write your own blogs
//               </li>
//               <li className="flex items-center gap-2">
//                 <span>👀</span> Read and explore community posts
//               </li>
//               <li className="flex items-center gap-2">
//                 <span>💬</span> Like and comment on posts
//               </li>
//               <li className="flex items-center gap-2">
//                 <span>⚙️</span> Manage your profile
//               </li>
//             </ul>
//             <div className="flex justify-center gap-6 mb-8">
//               <a
//                 href="/login"
//                 className="bg-black text-white px-8 py-3 rounded-lg shadow hover:bg-gray-700 transition"
//               >
//                 Login
//               </a>
//               <a
//                 href="/signup"
//                 className="bg-white border border-blue-600 text-black px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </Container>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/configDatabase";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  // Get current user (can be used later for personalization)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getCurrentUser();
      // console.log(user); // Optional: log user info
    };
    fetchUser();
  }, []);

  // Fetch posts
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // Landing Page for Unauthenticated Users or No Posts Found
  if (posts.length === 0) {
    return (
      <div
        className="min-h-screen flex items-center justify-center relative py-8 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/blog1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm overflow-auto">
          <Container className="bg-white/80 shadow-xl rounded-2xl p-6 sm:p-10 max-w-2xl mx-auto mt-10 mb-10">
            <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-green-500 text-transparent bg-clip-text text-center">
              Welcome to Blog World!
            </h1>
            <p className="text-lg text-white mb-8 text-center">
              Discover, share, and connect with bloggers around the world.
              <br />
              Sign up or log in to join the conversation!
              <br />
              <br />
              <span className="font-semibold text-blue-600">
                ✨ Unleash your creativity and inspire others with your stories.
              </span>
              <br />
              <span className="font-semibold text-purple-600">
                🚀 Stay updated with trending topics and featured writers.
              </span>
              <br />
              <span className="font-semibold text-pink-600">
                🌟 Build your personal brand and grow your audience.
              </span>
              <br />
              <span className="font-semibold text-green-600">
                💡 Learn, engage, and be part of a vibrant blogging community!
              </span>
            </p>

            <ul className="mb-8 text-left max-w-md mx-auto space-y-3 text-gray-100">
              <li className="flex items-center gap-2">
                <span>📝</span> Write your own blogs
              </li>
              <li className="flex items-center gap-2">
                <span>👀</span> Read and explore community posts
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span> Like and comment on posts
              </li>
              <li className="flex items-center gap-2">
                <span>⚙️</span> Manage your profile
              </li>
            </ul>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="/login"
                className="bg-black text-white px-8 py-3 rounded-lg shadow hover:bg-gray-700 transition"
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-white border border-blue-600 text-black px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition"
              >
                Sign Up
              </a>
            </div>
          </Container>
        </div>
      </div>
    );
  }

  // Display Posts for Authenticated Users
  return (
    <div className="w-full py-8 px-4 sm:px-6">
      <Container>
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
