"use client";

import { AppShell } from "@saas-ui/react";
import React from "react";

import HomeCoreFeatures from "@/components/Home/CoreFeatures";
import HomeGettingStarted from "@/components/Home/GettingStarted";
import HomeHero from "@/components/Home/Hero";
import Navbar from "@/components/Navigation/Navbar";
import HomeEarthTwo from "@/components/Home/Earth";

export default function Home() {
  return (
    <AppShell>
      <div className="bg-[url('/Space-bg.png')] absolute -z-20 top-0 h-[200vh] w-[100vw] max-[800px]:h-[350vh] max-[400px]:h-[450vh]">
        <div className="bg-[url('/Square-bg.svg')] absolute -z-30 top-[0rem] h-[200vh] w-[100vw] max-[800px]:h-[350vh] max-[400px]:h-[450vh]"></div>
        <Navbar />
        <div className="h-[200vh] !text-[white] max-[800px]:h-[350vh] max-[400px]:h-[450vh]">
          <HomeHero />
          <HomeEarthTwo />
          <HomeCoreFeatures />
        </div>
        <div id="HomeGettingStarted">
          <HomeGettingStarted />
        </div>
      </div>
    </AppShell>
  );
}
