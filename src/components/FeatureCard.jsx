const FeatureCard = ({ icon, header, text }) => {
  return (
    <div
      className="flex flex-col items-center text-center 
        md:items-start md:text-left "
    >
      <img className="w-[72px] h-[72px]" src={icon} alt="" />
      <h3
        className="text-xl md:text-2xl font-light tracking-[-0.36px] md:tracking-[-0.43px] 
        mt-6 md:mt-10 text-Dark_Blue"
      >
        {header}
      </h3>
      <p
        className="text-base font-normal tracking-[-0.23px] mt-4 
        md:mt-[26px] text-Grayish_Blue"
      >
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;
