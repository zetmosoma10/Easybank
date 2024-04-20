import ArticleCard from "../components/ArticleCard";
import { articleData } from "../constant";

const Articles = () => {
  return (
    <section className="bg-Very_Light_Gray py-20">
      <div className="max-container">
        <h2 className="font-light text-3xl text-center lg-tablet:text-left text-Dark_Blue tracking-[-0.57px]">
          Latest Articles
        </h2>
        <div className="mt-8 lg-tablet:mt-10 grid gap-y-6 gap-x-8 grid-cols-auto-fit_cols">
          {articleData.map((item) => (
            <ArticleCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
