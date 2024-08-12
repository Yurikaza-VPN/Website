import { AppShell } from "@saas-ui/react";
import React from "react";

import HomeCoreFeatures from "@/components/Home/CoreFeatures";
import HomeGettingStarted from "@/components/Home/GettingStarted";
import HomeGlobe from "@/components/Home/Globe";
import HomeHero from "@/components/Home/Hero";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  return (
    <AppShell navbar={<Navbar />}>
      <div className="bg-[url('/Space-bg.png')]">
        <HomeHero />
        <HomeGlobe />
        <HomeCoreFeatures />
      </div>
      <HomeGettingStarted />
    </AppShell>
  );
}
