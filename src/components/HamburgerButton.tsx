type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <div className="fixed top-10 right-4 lg:right-8 z-50">
      <button
        onClick={onClick}
        aria-label="Toggle menu"
        className="cursor-pointer relative w-6 h-6 flex items-center justify-center"
      >
        {/* Línea superior */}
        <span
          className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
        `}
        />

        {/* Línea del medio */}
        <span
          className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
        />

        {/* Línea inferior */}
        <span
          className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
        `}
        />
      </button>
    </div>
  );
}
