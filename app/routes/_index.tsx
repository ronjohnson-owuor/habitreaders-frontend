import type { MetaFunction } from "@remix-run/node";
import Faqs from "~/components/Faqs";
import Hero from "~/components/Hero";
import Homenav from "~/components/Homenav";
import Offer from "~/components/Offer";
import Onboard from "~/components/Onboard";
import Testimony from "~/components/Testimony";

export const meta: MetaFunction = () => {
  return [
    { title: "habit readers" },
    { name: "description", content: "the worlds best reading club" },
  ];
};

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-customBackground-light dark:bg-customBackground-dark">
    <Homenav/>
    <Hero/>
    <Offer/>
    <Onboard/>
    <Testimony/>
    <Faqs/>
    </div>
  );
}


