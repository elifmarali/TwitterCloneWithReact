function Button({ text, size, color, onClick, className }) {
  return (
    <button
      className={`rounded-full font-bold ${className || ""} 
        ${size === "normal" ? "px-3 text-[15px] min-w-[97.65px] min-h-[36px]" : ""} 
        ${size === "large" ? "w-[90%] px-8 py-[12px] my-4 text-[17px]" : ""}`}
      style={{
        backgroundColor: color ,
        color: color === "white" ? "black" : "white",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
