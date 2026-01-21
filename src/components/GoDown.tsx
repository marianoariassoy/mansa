"use client";
import { Forward } from "@/lib/icons";

const GoDown = () => {
  const goDown = () => {
    const element = document.querySelector("#second-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="absolute bottom-8 right-8">
      <button
        className="flex items-start gap-x-4 cursor-pointer"
        onClick={goDown}
      >
        <span className="text-3xl lg:text-4xl hover:underline">Detalle</span>
        <span className="rotate-90">
          <Forward />
        </span>
      </button>
    </div>
  );
};

export default GoDown;
