import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (query.length > 0) {
      setIsOpen(true);
    }
  }, [query]);
  return (
    <div className="mb-3 sticky top-0" ref={ref}>
      <div className="relative w-[348.4px] h-[42.4px] bg-[color:var(--background-second)] rounded-full flex items-center focus-within:border focus-within:border-[color:var(--color-second)] group pr-2 py-1">
        <div className="w-[50px] h-[42px] flex items-center">
          <svg
            viewBox="0 0 24 24"
            className="w-[18.59px] h-[18.59px] ml-4 absolute text-[color:var(--background-descText)] group-focus-within:text-[color:var(--color-primary)]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full h-full bg-transparent p-3 outline-none text-[color:var(--background-titleText)] placeholder:text-[color:var(--background-descText)]"
          placeholder="Ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={() => setIsOpen(true)}
        />
        {query.length > 0 && (
          <div
            className="w-[22px] h-[19px] bg-[color:var(--background-third)] flex mr-1 justify-center items-center rounded-full"
            onClick={() => {
              setQuery("");
            }}
          >
            <svg viewBox="0 0 15 15" width={9} height={9}>
              <path
                fill="black"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              />
            </svg>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="bg-[color:var(--background-primary)]  rounded-md shadow-box pt-[20px] p-3 text-center ">
          <span className="text-[color:var(--background-color-descText)] ">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </span>
        </div>
      )}
    </div>
  );
}

export default Search;
