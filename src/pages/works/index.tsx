import { workApi } from "@/api-client";
import { Mainlayout } from "@/components/layouts";
import { getErrorMessage } from "@/utils";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

type Props = {};

const WorksPage = (props: Props) => {
  const getData = async () => {
    try {
      const workList = await workApi.getAll({});
      console.log({ workList });
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Typography component={"h1"} variant="h3" color={"primary.main"}>
        <div>WorksPage</div>
      </Typography>

      <Button>Submit</Button>
    </Box>
  );
};

WorksPage.Layout = Mainlayout;

export default WorksPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
