import { Forward } from "@/lib/icons";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import HorizontalInit from "@/components/HorizontalInit";

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/home", {
    cache: "no-store",
  });

  const data = (await response.json()) as Project[];
  if (!data) return null;

  return (
    <main>
      {/* 👇 activa el scroll horizontal por JS */}
      <HorizontalInit />

      <div className="top-1/2 right-8 -traslate-y-1/2 z-50 hidden lg:fixed">
        <Forward />
      </div>

      {data.map((item) => (
        <section
          className="horizontal-section"
          key={item.id}
          style={{
            height: `${item.images.length * 100}vh`,
          }}
        >
          <div className="sticky-wrapper">
            <div
              className="horizontal-track"
              style={{
                width: `${item.images.length * 100}vw`,
              }}
            >
              {item.images.map((image) => (
                <div className="panel fade-in" key={image.id}>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="block h-full w-full"
                  >
                    <Image
                      src={image.src}
                      alt={item.title}
                      width={1420}
                      height={1280}
                      className="object-cover h-full w-full"
                      priority={false}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
