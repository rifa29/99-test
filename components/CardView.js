"use client";

import { ArrowBigDown, ArrowBigUp, MessageSquare } from "lucide-react";
import Link from "next/link";

import { getFromNow } from "../utils/formatter";

export default function CardView({ content }) {
  return (
    <div className="relative">
      <Link href={`/post/${content.id}`}>
        <div className="flex items-center mb-2">
          <div className="text-xs font-bold text-gray-600 flex items-center">
            {content.author}
            <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mx-4"></span>
            {getFromNow(content.created)}
          </div>
        </div>
        <div className="text-md font-bold mb-2">{content.title}</div>
        <img
          className="w-full h-[400px] object-cover rounded-md mb-2"
          src={
            content.preview
              ? content.preview.images[0].source.url
              : content.thumbnail
          }
          alt="image"
        />
        <div className="flex items-center">
          <div className="flex py-1 px-2 bg-gray-100 rounded-full items-center mr-3">
            <ArrowBigUp className="w-5 h-5 cursor-pointer text-gray-500" />
            <p className="text-center text-xs">{content.ups - content.downs}</p>
            <ArrowBigDown className="w-5 h-5 cursor-pointer text-gray-500" />
          </div>
          <div className="flex py-1 px-2 bg-gray-100 rounded-full items-center mr-3">
            <MessageSquare className="w-4 h-4 mr-1 text-gray-500" />
            <p className="text-center text-xs">{content.num_comments}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
