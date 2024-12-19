import React from "react";
import Button from "~/components/Button";

function Premium() {
  return (
    <div className="antialiased border border-[color:var(--background-second)] py-3 px-4 flex flex-col gap-2.5 rounded-lg mb-4">
      <p className="text-xl font-bold">Premium'a Abone Ol</p>
      <p className="text-md text-[15px]">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda içerik
        üreticisi gelir payı kazan.
      </p>
      <Button
        text="Abone ol"
        size="normal"
        color="var(--color-primary)"
        buttonOption="colorfull"
      />
    </div>
  );
}

export default Premium;
