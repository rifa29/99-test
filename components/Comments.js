import useRedditStore from "../stores/reddit.store";
import { ArrowBigDown, ArrowBigUp, MessageSquare } from "lucide-react";

function CommentList({ comment }) {
  return (
    <div className="pl-10">
      <div className="realative flex items-start mb-2">
        <span className="h-[100px] w-[1px] bg-gray-300 absolute left-4 top-4 inline-block"></span>
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <div>
          <div className="font-semibold text-gray-500">{comment?.data?.author}</div>
          <p className="mb-2">{comment?.data?.body}</p>
          <div className="flex">
            <div className="flex py-1 px-2 bg-gray-100 rounded-full items-center mr-3">
              <ArrowBigUp className="w-5 h-5 cursor-pointer text-gray-500" />
              <p className="text-center text-xs">{comment?.data?.ups - comment?.data?.downs}</p>
              <ArrowBigDown className="w-5 h-5 cursor-pointer text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      
      {(comment?.data?.replies?.data?.children || []).length > 0 && (
        <>
          {comment.data.replies.data.children.map((reply, index) => (
            <CommentList
              key={`comment-${comment.id}-${index}`}
              comment={reply}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default function Comments() {
  const { post } = useRedditStore();

  return (
    <div>
      {post.comments.map((comment, index) => (
        <CommentList key={`comment-${index}`} comment={comment} />
      ))}
    </div>
  );
}
