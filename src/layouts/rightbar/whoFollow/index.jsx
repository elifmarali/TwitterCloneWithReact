import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "~/components/Button";
import RigthbarSection from "~/components/RigthbarSection";

function WhoFollow() {
  const { followUsers } = useSelector((state) => state.userList);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      setIsOverflow(element.scrollHeight > element.offsetHeight);
    }
  }, [followUsers]);
  return (
    <RigthbarSection
      title="Kimi takip etmeli"
      ref={contentRef}
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      isOverflow={isOverflow}
    >
      {followUsers?.map((user) => (
        <div className="py-3 px-4 flex">
          <img
            src={user.image}
            alt={`${user.name} images`}
            width={40}
            height={40}
            className="mr-2 rounded-full object-cover"
          />
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-[#71767b]">@{user.username}</div>
            </div>
            <div>
              <Button
                text="Takip Et"
                size="normal"
                color="white"
                className="whitespace-nowrap"
              />
            </div>
          </div>
        </div>
      ))}
    </RigthbarSection>
  );
}

export default WhoFollow;
