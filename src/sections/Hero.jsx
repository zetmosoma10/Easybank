import Button from "../components/Button";
import heroImg from "../assets/image-mockups.png";
import MobileNav from "../components/MobileNav";
import bgDesktop from "../assets/bg-intro-desktop.svg";
import bgMobile from "../assets/bg-intro-mobile.svg";

const Hero = ({ toggle }) => {
  return (
    <section className=" bg-Very_Light_Gray overflow-hidden">
      <div
        className="max-container grid grid-rows-[50%,1fr] lg-tablet:grid-rows-[780px]
         lg-tablet:grid-cols-2 lg-tablet:items-center lg-tablet:gap-8 "
      >
        <div
          className="order-2 lg-tablet:order-1 text-center 
          lg-tablet:text-left self-center "
        >
          <h1
            className="text-Dark_Blue font-light text-[40px] lg-tablet:text-[56px] lg-tablet:leading-[64px] 
            tracking-[-0.71px] lg-tablet:tracking-[-1px]"
          >
            Next generation digital banking
          </h1>
          <p
            className="text-Grayish_Blue tracking-[-0.23px] text-base lg:text-lg 
            lg-tablet:tracking-[-0.28px] mt-4 lg-tablet:mt-6 "
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className="mt-8 lg-tablet:mt-[36px]">Request Invite</Button>
        </div>
        <div className="relative lg-tablet:order-2 self-end ">
          <img className=" lg-tablet:max-w-[732px]" src={heroImg} alt="" />
        </div>
      </div>
      {toggle && (
        <div className="absolute top-[90px] left-0 right-0 bottom-0 m-auto lg-tablet:hidden ">
          <MobileNav />
        </div>
      )}
    </section>
  );
};

export default Hero;
