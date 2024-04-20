import onlineIcon from "./assets/icon-online.svg";
import onBoardingIcon from "./assets/icon-onboarding.svg";
import budgetIcon from "./assets/icon-budgeting.svg";
import apiIcon from "./assets/icon-api.svg";
import currencyImg from "./assets/image-currency.jpg";
import confettiImg from "./assets/image-confetti.jpg";
import planeImg from "./assets/image-plane.jpg";
import restaurantImg from "./assets/image-restaurant.jpg";

export const featureData = [
  {
    icon: onlineIcon,
    header: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: budgetIcon,
    header: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: onBoardingIcon,
    header: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: apiIcon,
    header: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const articleData = [
  {
    author: "Claire Robinson",
    img: currencyImg,
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    author: "Wilson Hutton",
    img: restaurantImg,
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    author: "Wilson Hutton",
    img: planeImg,
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    author: "Claire Robinson",
    img: confettiImg,
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

export const navLinks = ["Home", "About Us", "Contact", "Blog", "Careers"];
