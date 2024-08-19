"use client";

import Owerview from "@/components/Documentation/Overview";
import "./documentation.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Contribute from "@/components/Documentation/Contribute";
import { Spinner } from "@chakra-ui/react";
import Installation from "@/components/Documentation/Installation";

import {
  AppShell,
  Sidebar,
  SidebarSection,
  NavItem,
  SidebarToggleButton,
} from "@saas-ui/react";
import Navbar from "@/components/Documentation/Navbar";
import UseCases from "@/components/Documentation/UseCases";

export default function Page() {
  const searchParams = useSearchParams();

  const [searchData, setSearch] = useState<string | undefined>("");

  useEffect(() => {
    const search = searchParams.get("data");
    console.log(search);
    setSearch(search?.toString());
  }, [searchParams]);

  return (
    <AppShell
      sidebar={
        <Sidebar toggleBreakpoint="md" style={{ marginTop: "3rem" }}>
          <SidebarToggleButton style={{ marginTop: "3rem" }} />
          <SidebarSection aria-label="Main">
            <NavItem
              isActive={searchData === "overview" ? true : false}
              href="/documentation?data=overview"
            >
              Overview
            </NavItem>

            <NavItem
              isActive={searchData === "contribute" ? true : false}
              href="/documentation?data=contribute"
            >
              Contribute
            </NavItem>

            <NavItem
              isActive={searchData === "installation" ? true : false}
              href="/documentation?data=installation"
            >
              How to Become a Node
            </NavItem>
            <NavItem
              isActive={searchData === "usecases" ? true : false}
              href="/documentation?data=usecases"
            >
              Use Cases
            </NavItem>
          </SidebarSection>
        </Sidebar>
      }
      navbar={<Navbar />}
    >
      <div className="flex justify-between gap-12 pt-12 items-center w-[80%] ml-auto mr-auto max-[800px]:w-[95%] max-[800px]:ml-auto max-[800px]:mr-auto">
        <div className="flex justify-center">
          {searchData === "overview" ? (
            <Owerview />
          ) : searchData === "contribute" ? (
            <Contribute />
          ) : searchData === "installation" ? (
            <Installation />
          ) : searchData === "usecases" ? (
            <UseCases />
          ) : (
            <Spinner className="mt-24 text-center self-center" />
          )}
        </div>
      </div>
    </AppShell>
  );
}

/* 
      
      <Timeline className="self-start pl-12">
        {timelienOneData.map((data, index: number) => (
          <TimelineItem
            onClick={() => {
              data.active = true;
            }}
          >
            <TimelineSeparator>
              <TimelineTrack />
              <TimelineIcon color={data.active ? "green.500" : "black"} />
            </TimelineSeparator>
            <TimelineContent>{data.name}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      */
