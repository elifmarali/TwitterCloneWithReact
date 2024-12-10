import React, { useState, useEffect, useRef } from "react";
import { topics } from "~/utils/consts";
import TopicItem from "./topicItem";

function Topics() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      setIsOverflow(element.scrollHeight > element.offsetHeight);
    }
  }, [topics]);

  return (
    <div className="antialiased border border-[#2f3336] py-3 px-4 flex flex-col gap-2.5 rounded-lg mb-4">
      <p className="text-xl font-bold">Neler oluyor?</p>
      <div
        ref={contentRef}
        className={`${
          isExpanded ? "max-h-none overflow-y-auto" : "max-h-[430.5px] overflow-hidden"
        }`}
      >
        {topics.map((topicItem, index) => (
          <TopicItem topic={topicItem} key={index} />
        ))}
      </div>
      {isOverflow && (
        <div
          className="text-[#1d9bf0] cursor-pointer mt-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Daha az göster" : "Daha fazla göster"}
        </div>
      )}
    </div>
  );
}

export default Topics;
