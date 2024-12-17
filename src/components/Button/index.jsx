function Button(children) {
  return (
    <button
      className={`rounded-full font-bold ${children.className}
        ${
          children.size === "normal" &&
          "px-3 text-[15px] min-w-[97.65px] min-h-[36px]"
        } 
        ${
          children.size === "large" && "w-[90%] px-8 py-[12px] my-4 text-[17px]"
        }
        ${children.color === "white" ? `bg-white text-black` : `bg-[${children.color}] text-white`}`}
        onClick={()=> children.onClick()}
    >
      {children.text}
    </button>
  );
}

export default Button;
