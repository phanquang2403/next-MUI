import { workApi } from "@/api-client";
import { Mainlayout } from "@/components/layouts";
import { useWorkList } from "@/hooks";
import { getErrorMessage } from "@/utils";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const WorksPage = (props: Props) => {
  const [filter, setFilter] = useState<Partial<API.IListParams>>({
    _page: 1,
    _limit: 10,
  });

  const { data: wordList, isLoading } = useWorkList({
    params: filter,
    options: {},
  });

  const handleNextClick = () => {
    setFilter((prev) => ({
      ...prev,
      _page: (prev?._page || 0) + 1,
    }));
  };

  return (
    <Box>
      <Typography component={"h1"} variant="h3" color={"primary.main"}>
        <div>WorksPage</div>
      </Typography>
      <Box>
        <Button variant="contained" onClick={handleNextClick}>
          Next page
        </Button>
      </Box>
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
