import Link from "next/link";

const HeaderPortfolio = () => {
  return (
    <div>
      <Link href="/">
        <img
          src="/assets/logo.svg"
          className="h-6 hover:opacity-80 transition-opacity"
          alt="Logo Mansa"
        />
      </Link>
    </div>
  );
};

export default HeaderPortfolio;
