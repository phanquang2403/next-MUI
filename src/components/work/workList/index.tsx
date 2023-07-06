import { Box, Divider } from "@mui/material";
import React, { Fragment } from "react";
import { WorkCard } from "../workCard";

export interface WorkListProps {
  workList: WorkType.Work[];
}
export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return <Box>No data</Box>;
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <Box>{work.title}</Box>
          <WorkCard work={work} />
          <Divider
            sx={{
              my: 3,
            }}
          />
        </Fragment>
      ))}
    </Box>
  );
}
