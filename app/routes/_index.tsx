import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Homenav from "~/components/Homenav";
import Offer from "~/components/Offer";
import Onboard from "~/components/Onboard";

export const meta: MetaFunction = () => {
  return [
    { title: "habit readers" },
    { name: "description", content: "the worlds best reading club" },
  ];
};

export default function Index() {
  return (
    <div>
    <Homenav/>
    <Hero/>
    <Offer/>
    <Onboard/>
    </div>
  );
}


