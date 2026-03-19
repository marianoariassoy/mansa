"use client";
import Link from "next/link";
import { Project } from "@/types";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ArticleHome = ({ item }: { item: Project }) => {
  const properties = {
    prevArrow: <button></button>,
    nextArrow: (
      <button className="text-black lg:opacity-0 hover:opacity-100 cursor-pointer z-50 h-full w-1/3 flex justify-end items-center px-2 lg:px-6 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
  };

  return (
    <article key={item.id} className="w-screen fade-in">
      <Slide
        {...properties}
        autoplay={false}
        infinite={true}
        pauseOnHover={false}
        arrows={true}
        indicators={false}
        transitionDuration={400}
      >
        {item.images.map((image) => (
          <div key={image.id} className="h-screen">
            <Link
              href={`/portfolio/${item.slug}`}
              className="block h-full w-full"
            >
              <img
                src={image.src}
                alt={item.title}
                className="object-cover h-full w-full"
              />
            </Link>
          </div>
        ))}
      </Slide>
    </article>
  );
};

export default ArticleHome;
