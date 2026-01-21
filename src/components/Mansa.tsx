import Link from "next/link";

const Mansa = () => {
  return (
    <div className="mb-4">
      <Link href="/">
        <img
          src="/assets/logo.svg"
          alt="Logo Mansa"
          className="h-8 lg:h-10 -rotate-(--rotate-deg) lg:-rotate-6 hover:-rotate-10 transition-transform"
        />
      </Link>
    </div>
  );
};

export default Mansa;
