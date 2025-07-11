// import React from "react";
// import { Container, PostForm } from "../components";

// function AddPost() {
//   return (
//     <div className="py-8">
//       <Container>
//         <PostForm />
//       </Container>
//     </div>
//   );
// }

// export default AddPost;

import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="w-full py-8 px-4 sm:px-6">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
            Create a New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
