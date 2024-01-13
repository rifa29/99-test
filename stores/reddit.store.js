import { create } from "zustand";

const useRedditStore = create((set, get) => ({
  after: "",
  setAfter: (after) => set({ after }),
  sort: "hot",
  setSort: (sort) => set({ sort }),
  view: "card",
  setView: (view) => set({ view }),
  isLoadingPosts: true,
  setIsLoadingPosts: (isLoadingPosts) => set({ isLoadingPosts }),
  posts: [],
  setPosts: (posts) => set({ posts }),
  postId: null,
  setPostId: (postId) => set({ postId }),
  isLoadingPost: true,
  setIsLoadingPost: (isLoadingPost) => set({ isLoadingPost }),
  post: null,
  setPost: (post) => set({ post }),
}));

export default useRedditStore;
