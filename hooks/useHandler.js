import { useEffect, useState } from "react";
import useRedditStore from "../stores/reddit.store";

export default function useSubredditThread() {
  const BASE_REDIT_THREAD_URL = "https://www.reddit.com/r/holdmybeer";
  const BASE_REDIT_COMMENTS_URL =
    "https://www.reddit.com/r/holdmybeer/comments";

  const {
    after,
    setAfter,
    sort,
    setSort,
    setPost,
    posts,
    setPosts,
    setIsLoadingPost,
    setIsLoadingPosts,
  } = useRedditStore();

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    try {
      const rawResults = await fetch(
        `${BASE_REDIT_THREAD_URL}/${sort}.json?after=${after}&limit=15&raw_json=1`
      );
      const jsonResults = await rawResults.json();
      setPosts([...posts, ...jsonResults.data.children.map((obj) => obj.data)]);
      setAfter(jsonResults.data.after);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const fetchPost = async (postId) => {
    setIsLoadingPost(true);
    try {
      const rawResults = await fetch(
        `${BASE_REDIT_COMMENTS_URL}/${postId}.json?raw_json=1`
      );
      const jsonResults = await rawResults.json();
      console.log(jsonResults[1].data.children[0].data, "JSON RESULT");
      setPost({
        ...jsonResults[0].data.children[0].data,
        comments: jsonResults[1]?.data?.children || []
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingPost(false);
    }
  };

  const handleScroll = (e) => {
    const scrollElem = document.querySelector(".scrollContainer");
    const trigger = scrollElem.scrollTop + scrollElem.offsetHeight;

    if (trigger + 10 > scrollElem.scrollHeight) {
      fetchPosts();
    }
    return;
  };

  const handleSort = (sortBy) => {
    setSort(sortBy);
  };

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  return {
    fetchPost,
    fetchPosts,
    onScroll: handleScroll,
    handleViewChange,
    handleSort,
  };
}
