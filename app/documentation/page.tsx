"use client";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineIcon,
  TimelineTrack,
  TimelineContent,
} from "@saas-ui/react";
import { AppShell, Sidebar, SidebarSection, NavItem } from "@saas-ui/react";
import { timelienOneData } from "@/components/Documentation/data";
import Owerview from "@/components/Documentation/Overview";
import Navbar from "@/components/Documentation/Navbar";

export default function Page() {
  return (
    <AppShell
      style={{
        color: "#fff !important",
        backgroundColor: "#000 !important",
        width: "70% !important",
      }}
      sidebar={
        <Sidebar toggleBreakpoint="sm" style={{ paddingTop: "3rem" }}>
          <SidebarSection aria-label="Main">
            <NavItem isActive>Owerview</NavItem>
            <NavItem>Users</NavItem>
            <NavItem>Settings</NavItem>
          </SidebarSection>
        </Sidebar>
      }
      navbar={<Navbar />}
    >
      <div className="flex justify-between gap-12 pt-12 items-center w-[80%] ml-auto mr-auto">
        <Owerview />
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
      </div>
    </AppShell>
  );
}
