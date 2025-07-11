// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/configDatabase";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//   const [post, setPost] = useState(null);
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const userData = useSelector((state) => state.auth.userData);

//   const isAuthor = post && userData ? post.userId === userData.$id : false;

//   useEffect(() => {
//     if (slug) {
//       appwriteService.getPost(slug).then((post) => {
//         if (post) {
//           setPost(post);
//           // console.log(
//           //   "File preview is : ",
//           //   appwriteService.getFileView(post.featuredImage)
//           // );
//           // console.log("Featured Image is : ", post.featuredImage);
//         } else navigate("/");
//       });
//     } else navigate("/");
//   }, [slug, navigate]);

//   const deletePost = () => {
//     appwriteService.deletePost(post.$id).then((status) => {
//       if (status) {
//         appwriteService.deleteFile(post.featuredImage);
//         navigate("/");
//       }
//     });
//   };

//   return post ? (
//     <div className="py-8">
//       <Container>
//         <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//           <img
//             src={appwriteService.getFileView(post.featuredImage)}
//             alt={post.title}
//             className="rounded-xl"
//           />

//           {isAuthor && (
//             <div className="absolute right-6 -bottom-12">
//               <Link to={`/edit-post/${post.$id}`}>
//                 <Button bgColor="bg-green-500" className="mr-3">
//                   Edit
//                 </Button>
//               </Link>
//               <Button bgColor="bg-red-500" onClick={deletePost}>
//                 Delete
//               </Button>
//             </div>
//           )}
//         </div>
//         <div className="w-full mb-6">
//           <h1 className="text-2xl font-bold">{post.title}</h1>
//         </div>
//         <div className="browser-css">{parse(post.content)}</div>
//       </Container>
//     </div>
//   ) : null;
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configDatabase";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 px-4 sm:px-6">
      <Container>
        <div className="w-full flex flex-col items-center mb-8 border rounded-xl p-4 sm:p-6 relative">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-h-[500px] object-cover"
          />

          {/* {isAuthor && (
            <div className="flex gap-3 mt-4 sm:absolute sm:right-6 sm:top-6 sm:mt-0">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-1">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )} */}
          {isAuthor && (
            // <div className="flex flex-wrap gap-3 mt-4 sm:absolute sm:right-6 sm:top-6 sm:mt-0">
            <div
              className="flex flex-wrap gap-3 mt-4 sm:justify-end sm:items-start sm:mt-0"
              style={{ "margin-top": "15px" }}
            >
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-gradient-to-r from-green-400 to-green-600"
                  className="text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 sm:text-xs md:text-sm"
                >
                  ✏️ Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-gradient-to-r from-red-400 to-red-600"
                onClick={deletePost}
                className="text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 sm:text-xs md:text-sm"
              >
                🗑️ Delete
              </Button>
            </div>
          )}
        </div>

        <div className="w-full mb-6 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">{post.title}</h1>
        </div>

        <div className="browser-css prose max-w-none">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
