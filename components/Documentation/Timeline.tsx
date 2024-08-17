import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineIcon,
  TimelineTrack,
  TimelineContent,
} from "@saas-ui/react";
import React from "react";

export interface ITimeline {
  name: string;
  active: boolean;
}

const DocumentationTimeline: React.FC<ITimeline[]> = (
  propsData: ITimeline[]
) => {
  return (
    <Timeline>
      {propsData.map((data) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineTrack />
            <TimelineIcon
              color={data.active ? "green.500" : "black"}
              _dark={{ color: data.active ? "green.500" : "black" }}
            />
          </TimelineSeparator>
          <TimelineContent>{data.name}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default DocumentationTimeline;
