import { workApi } from "@/api-client";
import { Mainlayout } from "@/components/layouts";
import { WorkList } from "@/components/work";
import { useWorkList } from "@/hooks";
import { getErrorMessage } from "@/utils";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
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

  const handlePrevClick = () => {
    setFilter((prev) => ({
      ...prev,
      _page: (prev?._page || 0) - 1,
    }));
  };

  const handleNextClick = () => {
    setFilter((prev) => ({
      ...prev,
      _page: (prev?._page || 0) + 1,
    }));
  };

  return (
    <Box>
      <Container>
        <Box mb={4} mt={8}>
          <Typography
            component={"h1"}
            variant="h3"
            color={"primary.main"}
            fontWeight={"bold"}
          >
            WorksPage
          </Typography>
        </Box>

        {isLoading ? (
          <LinearProgress
            sx={{
              marginBottom: 2,
            }}
          />
        ) : (
          <WorkList workList={wordList?.data || []} />
        )}
        <Box>
          <Button variant="contained" onClick={handlePrevClick}>
            Next page
          </Button>
          <Button variant="contained" onClick={handleNextClick}>
            Next page
          </Button>
        </Box>
      </Container>
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
