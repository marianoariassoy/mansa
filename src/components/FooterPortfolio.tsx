"use client";
import { Forward } from "@/lib/icons";

const FooterPortfolio = () => {
  const goToUp = () => {
    const element = document.querySelector("#top-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-y-16 items-end mt-10">
      <div>
        <button
          className="flex items-start gap-x-4 cursor-pointer"
          onClick={goToUp}
        >
          <span className="text-3xl lg:text-4xl hover:underline">Regresar</span>
          <span className="-rotate-90">
            <Forward />
          </span>
        </button>
      </div>
      <div>
        <a
          href="http://instagram.com/mansa_estudio"
          target="_blank"
          className="text-lg font-display hover:underline"
          rel="noopener noreferrer"
        >
          @MANSA_ESTUDIO
        </a>
      </div>
    </div>
  );
};

export default FooterPortfolio;
