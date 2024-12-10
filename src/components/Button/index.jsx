function Button(children) {
  return (
    <button
      className={`bg-[#1d9bf0] rounded-full font-bold
        ${children.size === "normal" && "px-4 text-[15px] max-w-[97.65px] min-h-[36px]"} 
        ${children.size === "large" && "w-[90%] px-8 py-[12px] my-4 text-[17px]" }`}
    >
      {children.text}
    </button>
  );
}

export default Button;
