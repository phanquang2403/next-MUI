import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
export interface WorkCardProps {
  work: WorkType.Work;
}
export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ sx: "column", md: "row" }} spacing={2}>
      <Box width={{ sx: "100%", md: "245px" }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          width={244}
          height={180}
          alt="work thumbnail"
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight={"bold"}>
          {work.title}
        </Typography>
        <Stack mt={2} direction={"row"}>
          <Chip color="default" label={work.createdAt} size="small" />
          <Typography ml={3} color={"GrayText"}>
            {work.tagList.join(", ")}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
