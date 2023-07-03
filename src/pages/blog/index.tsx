import { Mainlayout } from "@/components/layouts";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <Box>
      <Typography component={"h1"} variant="h3" color={"primary.main"}>
        <div>BlogPage</div>
      </Typography>

      <Button>Submit</Button>
    </Box>
  );
};

BlogPage.Layout = Mainlayout;

export default BlogPage;
