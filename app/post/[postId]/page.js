"use client";

import { useEffect } from "react";
import Header from "../../../components/Header";
import CardView from "../../../components/CardView";
import useRedditStore from "../../../stores/reddit.store";
import useHandler from "../../../hooks/useHandler";
import Comments from "../../../components/Comments";

export default function PostPage({ params }) {
  const { setPostId, isLoadingPost, post } = useRedditStore();
  const { fetchPost } = useHandler();

  useEffect(() => {
    setPostId(params.postId);

    if (params.postId) {
      fetchPost(params.postId);
    }
  }, [params.postId]);

  return (
    <>
      <Header />
      <div className="container">
        {isLoadingPost && <>Loading...</>}
        {!isLoadingPost && (
          <>
            <CardView content={post} />
            <div className="mt-5">
              {/* <h1>POST DETAIL : {params.postId}</h1> */}
              <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white  p-5 pl-16">
                <form className="flex space-y-2 flex-col">
                  <textarea
                    className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
                    placeholder="What are your though"
                  ></textarea>

                  <button
                    type="submit"
                    className="rounded-full bg-red-400 p-3 font-semibold text-white disabled:bg-gray-200"
                  >
                    Comment
                  </button>
                </form>
              </div>
              <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
                <Comments />
                <hr className="py-2" />
                {/* <div className="relative flex items-center space-x-2 space-y-5">
                  <hr className="absolute top-10 h-16 border left-7 z-0 " />
                  <div className="z-50">
                    <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
                  </div>

                  <div className="flex flex-col">
                    <p className="py-2 text-xs text-gray-400">
                      <span className="font-semibold text-gray-600">
                        John Doe
                      </span>
                      3 days ago
                    </p>
                    <p className="">Lorem ipsum dolor sit amet</p>
                  </div>
                </div> */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
