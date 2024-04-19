import onlineIcon from "./assets/icon-online.svg";
import onBoardingIcon from "/src/assets/icon-onboarding.svg";
import budgetIcon from "/src/assets/icon-budgeting.svg";
import apiIcon from "/src/assets/icon-api.svg";

export const featureData = [
  {
    icon: { onlineIcon },
    header: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: { budgetIcon },
    header: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: { onBoardingIcon },
    header: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: { apiIcon },
    header: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
