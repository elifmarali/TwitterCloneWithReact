import React from "react";
import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";

function Rightbar() {
  return (
    <aside className="w-[350px] mr-[70px] min-h-[1134.09px] pt-3">
      <Search />
      <Premium />
      <Topics />
    </aside>
  );
}

export default Rightbar;
