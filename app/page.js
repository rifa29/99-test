"use client";

import { useEffect } from "react";
import CompactView from "../components/CompactView";
import ClassicView from "../components/ClassicView";
import CardView from "../components/CardView";
import Header from "../components/Header";
import useHandler from "../hooks/useHandler";
import { Flame, FilePlus2, TrendingUp } from "lucide-react";
import useRedditStore from "../stores/reddit.store";

export default function Home() {
  const { sort, view, posts, setPosts } = useRedditStore();
  const { fetchPosts, onScroll, handleSort } = useHandler();

  useEffect(() => {
    setPosts([]);
    fetchPosts();
  }, [sort]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="flex h-[35px] items-center mb-4">
          <label className="mr-2">Sort</label>
          <button
            onClick={() => handleSort("hot")}
            className={`py-1 px-2 items-center text-sm flex border ${
              sort === "hot"
                ? "bg-blue-500 border-blue-500 text-white"
                : "border-gray-300"
            } `}
          >
            <Flame className="w-4 h-4 mr-1" /> Hot
          </button>
          <button
            onClick={() => handleSort("new")}
            className={`py-1 px-2 items-center text-sm flex border ${
              sort === "new"
                ? "bg-blue-500 border-blue-500 text-white"
                : "border-gray-300"
            } `}
          >
            <FilePlus2 className="w-4 h-4 mr-1" /> New
          </button>
          <button
            onClick={() => handleSort("top")}
            className={`py-1 px-2 items-center text-sm flex border ${
              sort === "top"
                ? "bg-blue-500 border-blue-500 text-white"
                : "border-gray-300"
            } `}
          >
            <TrendingUp className="w-4 h-4 mr-1" /> Top
          </button>
        </div>
        <div className="scrollContainer" onScroll={onScroll}>
          {view === "classic" &&
            posts.map((post) => (
              <ClassicView
                key={`classic-${sort}-${post.id}`}
                content={post}
                onScroll={onScroll}
              />
            ))}
          {view === "compact" &&
            posts.map((post) => (
              <CompactView
                key={`compact-${sort}-${post.id}`}
                content={post}
                onScroll={onScroll}
              />
            ))}
          {view === "card" && (
            <div className="grid grid-cols-2 gap-6">
              {posts.map((post) => (
                <CardView
                  key={`card-${sort}-${post.id}`}
                  content={post}
                  onScroll={onScroll}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
