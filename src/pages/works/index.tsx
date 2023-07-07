import { Mainlayout } from "@/components/layouts";
import { WorkFilters, WorkList } from "@/components/work";
import { useWorkList } from "@/hooks";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

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

  const { _limit, _totalRows, _page } = wordList?.pagination || 0;
  const totalPages = useMemo(() => {
    return Boolean(_totalRows) ? Math.ceil(_totalRows / _limit) : 0;
  }, [_limit, _totalRows]);

  const handleChangePagination = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFilter((prev) => ({
      ...prev,
      _page: value,
    }));
  };

  const handleFilterChange = (newFilters: WorkType.WorkFiltersPayload) => {
    setFilter((prev) => ({
      ...prev,
      _page: 1,
      title_like: newFilters.search,
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

        <WorkFilters onSubmit={handleFilterChange} />
        <WorkList workList={wordList?.data || []} loading={isLoading} />

        {totalPages > 0 && (
          <Stack alignItems={"center"}>
            <Pagination
              page={_page}
              count={totalPages}
              color="primary"
              onChange={handleChangePagination}
            />
          </Stack>
        )}
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
