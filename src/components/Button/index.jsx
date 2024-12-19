import store from "~/store";

function Button({ text, size, color, onClick, className,buttonOption }) {

  return (
    <button
      className={`flex items-center justify-center rounded-full font-bold ${className || ""} 
        ${size === "normal" ? "px-3 text-[15px] min-h-[36px] w-[120px]" : ""} 
        ${size === "large" ? "w-[90%] px-8 py-[12px] my-4 text-[17px]" : ""}`}
      style={{
        backgroundColor: color ,
        color:  buttonOption==="colorless" ? "black" : "white",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
