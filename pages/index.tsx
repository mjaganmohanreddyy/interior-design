import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
// import { Testimonials } from "../components/Testimonials";
import Footer from "@/components/web/footer";
import Navbar from "@/components/web/navbar";
import Decks from "@/components/web/decks";
import Header from "@/components/web/header";
import Section from "@/components/web/section";
import Section2 from "@/components/web/section2";
import Testimonials from "@/components/web/testimonials";
import Logos from "@/components/web/logos";
import Section3 from "@/components/web/section3";



const Home: NextPage = () => {
  return (
    <>
    <Navbar />

    <div className="mt-8">
      <div className="relative isolate overflow-hidden bg-white ">
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        <Header />
        <Logos />
        <Decks /> 
        <Section />
        {/* <Section3 /> */}
        <Testimonials />
        <Section2 /> 
      </div>
    </div>
    <Footer />
    </>


  );
};

export default Home;