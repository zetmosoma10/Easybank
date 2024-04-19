import FeatureCard from "../components/FeatureCard";
import { featureData } from "../constant";

const Features = () => {
  return (
    <section className=" bg-Light_Grayish_Blue py-[64px] md:py-[96px] ">
      <div className="max-container">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl tracking-[-0.57px] md:tracking-[-0.71px] font-light text-Dark_Blue">
            Why choose Easybank?
          </h2>
          <p
            className="text-base md:text-lg tracking-[-0.23px]
             text-Grayish_Blue mt-[14px] md:mt-[16px]"
          >
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="grid gap-8  md:grid-cols-auto-fit_cols mt-[56px] md:mt-[72px]">
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
