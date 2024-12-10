import React from "react";

function TopicItem({ topic }) {
  return (
    <div className="p-3">
      {topic.topic.type === "tag" && (
        <div className="flex justify-between items-center">
          <div className="text-[#71767b] text-xs">{topic.topic.value}</div>
          <div className="w-[25.75px] h-[25.75px] rounded-full flex justify-center items-center group hover:bg-[#1d9bf01a]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width={18.75}
              height={18.75}
              className="text-[#71767b] group-hover:text-[#1d9bf0]"
            >
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="font-bold">{topic.title}</div>
        {topic.topic.type !== "tag" && (
          <div className="w-[34.75px] h-[34.75px] rounded-full flex justify-center items-center group hover:bg-[#1d9bf01a]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width={18.75}
              height={18.75}
              className="text-[#71767b] group-hover:text-[#1d9bf0]"
            >
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </div>
        )}
      </div>
      {topic.topic.type === "query" && (
        <div className="text-[#71767b]">{topic.topic.value}</div>
      )}
      {topic.postCount && (
        <div className="text-[#71767b] text-xs">{topic.postCount} gönderi</div>
      )}
    </div>
  );
}

export default TopicItem;
