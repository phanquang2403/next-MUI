import { Box, Chip, Skeleton, Stack, Typography } from "@mui/material";

export function WorkSkeleton() {
  return (
    <Stack direction={{ sx: "column", md: "row" }} spacing={2}>
      <Box width={{ sx: "100%", md: "245px" }} flexShrink={0}>
        <Skeleton variant="rectangular" width={244} height={180} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h4" fontWeight={"bold"}>
          <Skeleton />
        </Typography>
        <Stack mt={2} direction={"row"} alignItems={"center"}>
          <Skeleton variant="rectangular" width={50} height={16} />
          <Typography ml={3} color={"GrayText"} flexGrow={1}>
            <Skeleton />
          </Typography>
        </Stack>
        <Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton width={"40%"} />
        </Typography>
      </Box>
    </Stack>
  );
}
