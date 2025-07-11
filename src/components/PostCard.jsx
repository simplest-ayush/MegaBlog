// import React from "react";
// import appwriteService from "../appwrite/configDatabase";
// import { Link } from "react-router-dom";

// function PostCard({ $id, title, featuredImage }) {
//   // console.log("featuredImage:", featuredImage);

//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-gray-100 rounded-xl p-4">
//         <div className="w-full justify-center mb-4">
//           <img
//             src={
//               featuredImage ? appwriteService.getFileView(featuredImage) : ""
//             }
//             alt={title}
//             className="rounded-xl"
//           />
//         </div>
//         <h2 className="text-xl font-bold">{title}</h2>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;

import React from "react";
import appwriteService from "../appwrite/configDatabase";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imageURL = featuredImage
    ? appwriteService.getFileView(featuredImage)
    : "./placeholder.png"; // fallback image

  return (
    <Link
      to={`/post/${$id}`}
      className="block transition-transform hover:scale-[1.02]"
    >
      <div className="w-full bg-white shadow hover:shadow-lg rounded-xl overflow-hidden border border-gray-200">
        {/* Image Section */}
        <div className="aspect-w-16 aspect-h-10 bg-gray-100 overflow-hidden">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-cover transition duration-300"
            onError={(e) => {
              e.target.src = "./placeholder.png";
            }}
          />
        </div>

        {/* Title */}
        <div className="p-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
