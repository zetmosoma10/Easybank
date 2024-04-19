import featureImg from "../assets/icon-online.svg";

const FeatureCard = () => {
  return (
    <div
      className="flex flex-col items-center text-center 
        md:items-start md:text-left border border-red-200"
    >
      <img className="w-[72px] h-[72px]" src={featureImg} alt="" />
      <h3
        className="text-xl md:text-2xl font-light tracking-[-0.36px] md:tracking-[-0.43px] 
        mt-6 md:mt-10 text-Dark_Blue"
      >
        Online Banking
      </h3>
      <p className="text-base font-normal tracking-[-0.23px] mt-4 md:mt-[26px] text-Grayish_Blue">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore minus
        odio, deserunt maxime tempore laudantium enim doloribus nostrum.
      </p>
    </div>
  );
};

export default FeatureCard;
