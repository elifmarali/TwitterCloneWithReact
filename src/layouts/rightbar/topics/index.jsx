import React, { useState, useEffect, useRef } from "react";
import { topics } from "~/utils/consts";
import TopicItem from "./topicItem";
import RigthbarSection from "~/components/RigthbarSection";

function Topics() {
  // Listenin genişletilip genişletilmediği bilgisini tutar
  const [isExpanded, setIsExpanded] = useState(false);
  // İçeriğin taşma yapıp yapmadığı durumu kontrol eder
  const [isOverflow, setIsOverflow] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      setIsOverflow(element.scrollHeight > element.offsetHeight);
    }
  }, [topics]);

  return (
    <RigthbarSection title="Neler oluyor?" isOverflow={isOverflow} isExpanded={isExpanded} setIsExpanded={setIsExpanded} ref={contentRef}>
      {topics?.map((topicItem, index) => (
        <div className="hover:bg-[rgba(255,255,255,0.03)]" key={index}>
          <TopicItem topic={topicItem}  />
        </div>
      ))}
    </RigthbarSection>
  );
}

export default Topics;
