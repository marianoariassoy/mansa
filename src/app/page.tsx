import { Project } from "@/types";
import ArticleHome from "@/components/ArticleHome";

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/home", {
    cache: "no-store",
  });

  const data = (await response.json()) as Project[];
  if (!data) return null;

  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <ArticleHome key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
