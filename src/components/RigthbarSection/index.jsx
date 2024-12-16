import React from 'react'

function RigthbarSection({title,children,isOverflow,isExpanded,setIsExpanded,ref}) {
  return (
    <div className="antialiased border border-[#2f3336] flex flex-col gap-2.5 rounded-lg mb-4">
    <p className="text-xl font-bold py-3 px-4">{title}</p>
    <div
      ref={ref}
      className={`${
        isExpanded
          ? "max-h-none overflow-y-auto"
          : "max-h-[430.5px] overflow-hidden"
      }`}
    >
      {children}
    </div>
    {!isOverflow && (
      <div
        className="text-[#1d9bf0] cursor-pointer px-3 py-3 text-[#1d9bf0] hover:bg-[rgba(255,255,255,0.03)]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Daha az göster" : "Daha fazla göster"}
      </div>
    )}
  </div>
  )
}

export default RigthbarSection
