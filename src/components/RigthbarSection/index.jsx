import React, { forwardRef } from 'react'

const RigthbarSection =forwardRef(({title,children,isOverflow,isExpanded,setIsExpanded},ref) => {
  return (
    <div className="antialiased border border-[color:var(--background-second)] flex flex-col gap-2.5 rounded-lg mb-4">
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
    {isOverflow && (
      <div
        className="text-[color:var(--color-primary)] cursor-pointer px-3 py-3 text-[color:var(--color-primary)] hover:bg-[color:var(--background-second)]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Daha az göster" : "Daha fazla göster"}
      </div>
    )}
  </div>
  )
})

export default RigthbarSection
