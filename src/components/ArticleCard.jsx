const ArticleCard = ({ item }) => {
  return (
    <div className="overflow-hidden rounded-md shadow-sm">
      <img className="object-cover aspect-1.8/1 " src={item.img} alt="" />
      <div className="py-6 px-8 bg-white aspect-1.8/1">
        <small className="block text-Grayish_Blue">By {item.author}</small>
        <a
          className="text-base text-Dark_Blue tracking-[-0.29px] font-light 
          mt-2 block hover:text-Lime_Green cursor-pointer duration-200 "
        >
          {item.title}
        </a>
        <p className="text-sm tracking-[-0.2px] text-Grayish_Blue mt-2">
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
