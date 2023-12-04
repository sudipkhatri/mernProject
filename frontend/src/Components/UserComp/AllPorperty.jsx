import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import Diaglog from "../Diaglog";
import Skeleton from "./Skeleton";

export default function Rent() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isMounted = true; // This flag denotes if the component is mounted

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/post/`);
        if (isMounted) {
          setPosts(response.data.allPost);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false; // Cleanup function sets the flag to false
    };
  }, []);

  const handleToggleDialog = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // if (isLoading) {
  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center">
  //       Loading...
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full border-t min-h-[80vh] py-4 flex-col flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex w-full px-6">
          <h2 className="text-2xl font-semibold">Available Property</h2>
        </div>
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
          justify-items-center justify-center gap-y-20 gap-x-1 mt-10 mb-5"
        >
          {
            isLoading && (
              <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              </>
            )
            
          }

          {posts?.map((post, index) => {
            const {_id  ,users, title, description, imageUrl, address, price } = post;           
              return (
                <PostCard
                  key={index} // Assuming each post has a unique 'id'
                  id={_id}
                  users={users._id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  address={address}
                  price={price}
                  handleToggleDialog={handleToggleDialog}
                />
              );})}
        </div>
      </div>
      {open && <Diaglog handleToggleDialog={handleToggleDialog} />}
    </div>
  );
}
