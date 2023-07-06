import { Box, Divider } from "@mui/material";
import { Fragment } from "react";
import { WorkCard } from "../workCard";
import { WorkSkeleton } from "../workSkeleton";

export interface WorkListProps {
  workList: WorkType.Work[];
  loading?: boolean;
}
export function WorkList({ workList, loading }: WorkListProps) {
  if (loading)
    return (
      <Box>
        {Array.from({ length: 3 }).map((_, key) => (
          <Fragment key={key}>
            <WorkSkeleton />
            <Divider
              sx={{
                my: 3,
              }}
            />
          </Fragment>
        ))}
      </Box>
    );

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
