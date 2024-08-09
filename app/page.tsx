import Navbar from "@/components/Navigation/Navbar";
import { AppShell } from "@saas-ui/react";
import React from "react";

export default function Home() {
  return (
    <AppShell navbar={<Navbar />}>
      <h1>Hello</h1>
    </AppShell>
  );
}
