import FeatureCard from "../components/FeatureCard";
import { featureData } from "../constant";

const Features = () => {
  return (
    <section
      className=" bg-Light_Grayish_Blue py-[64px] lg-tablet:py-[96px] 
      lg-tablet:mt-[-100px] "
    >
      <div className="max-container">
        <div className="text-center md:text-left max-w-[630px]">
          <h2 className="text-3xl lg-tablet:text-4xl tracking-[-0.57px] lg-tablet:tracking-[-0.71px] font-light text-Dark_Blue">
            Why choose Easybank?
          </h2>
          <p
            className="text-base lg-tablet:text-lg tracking-[-0.23px]
             text-Grayish_Blue mt-[14px] lg-tablet:mt-[16px]"
          >
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="grid gap-8  grid-cols-auto-fit_cols mt-[56px] lg-tablet:mt-[72px]">
          {featureData.map((item) => (
            <FeatureCard
              key={item.header}
              icon={item.icon}
              header={item.header}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
