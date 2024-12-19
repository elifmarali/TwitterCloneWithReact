import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React from "react";
import store from "~/store";
import { numberFormat } from "~/utils/numberFormatter";

function TopicItem({ topic }) {
  const backgroundColors = store.getState().appearance.backgroundColors.primary;
  return (
    <div className="p-3 ">
      {topic.topic.type === "tag" && (
        <div className="flex justify-between items-center">
          <div className="text-[color:var(--background-descText)] text-xs">
            {topic.topic.value}
          </div>
          <Popover className="relative w-[25.75px] h-[25.75px] rounded-full group hover:bg-[color:var(--color-primary1a)] flex justify-center" style={{border:"none"}}>
            <PopoverButton className="flex justify-between items-center" style={{border:"none"}}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18.75}
                height={18.75}
                className="text-[color:var(--background-titleText)] group-hover:text-[color:var(--color-titleText)]"
              >
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col w-[384px] max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-md"
              style={{ position: "absolute" }}
            >
              <div className="flex flex-row items-center py-3 px-4  hover:bg-[color:var(--background-hover)]">
                <div className="pr-3 ">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="text-[color:var(--background-titleText)]">
                    <path
                      fill="currentColor"
                      d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">İlişkili içerik alakalı değil</div>
              </div>
              <div className="flex flex-row items-center py-3 px-4  hover:bg-[color:var(--background-hover)]">
                <div className="pr-3">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="text-[color:var(--background-titleText)]">
                    <path
                      fill="currentColor"
                      d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">Bu gündem spam</div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="font-bold">{topic.title}</div>
        {topic.topic.type !== "tag" && (
          <Popover className="relative w-[34.75px] h-[34.75px] rounded-full group hover:bg-[color:var(--color-primary1a)] flex justify-center">
            <PopoverButton>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18.75}
                height={18.75}
                className="text-[color:var(--background-descText)] group-hover:text-[color:var(--color-primary)]"
              >
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col w-[384px] max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-md "
              style={{ position: "absolute" }}
            >
              <div className="flex flex-row items-center py-3 px-4  hover:bg-[color:var(--background-hover)]">
                <div className="pr-3 ">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="text-[color:var(--background-titleText)]">
                    <path
                      fill="currentColor"
                      d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">İlişkili içerik alakalı değil</div>
              </div>
              <div className="flex flex-row items-center py-3 px-4  hover:bg-[color:var(--background-hover)]">
                <div className="pr-3">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="text-[color:var(--background-titleText)]">
                    <path
                      fill="currentColor"
                      d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">Bu gündem spam</div>
              </div>
            </PopoverPanel>
          </Popover>
        )}
      </div>
      {topic.topic.type === "query" && (
        <div className="text-[color:var(--background-descText)]">
          {topic.topic.value}
        </div>
      )}
      {topic.postCount && (
        <div className="text-[color:var(--background-descText)] text-xs">
          {numberFormat(topic.postCount)} gönderi
        </div>
      )}
    </div>
  );
}

export default TopicItem;
