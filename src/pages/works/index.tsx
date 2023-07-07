import { Mainlayout } from "@/components/layouts";
import { WorkFilters, WorkList } from "@/components/work";
import { useWorkList } from "@/hooks";
import {
  Box,
  Container,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

type Props = {};

const WorksPage = (props: Props) => {
  const router = useRouter();

  const filters: Partial<API.IListParams> = {
    _page: 1,
    _limit: 10,

    ...router.query,
  };

  // const [filter, setFilter] = useState<Partial<API.IListParams>>({
  //   _page: 1,
  //   _limit: 10,
  // });

  const { data: wordList, isLoading } = useWorkList({
    // params: filter,
    params: filters,
    enabled: router.isReady,
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
    // setFilter((prev) => ({
    //   ...prev,
    //   _page: value,
    // }));

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: value,
        },
      },
      undefined,
      {
        shallow: true, // tricker render bên client
      }
    );
  };

  const handleFilterChange = (newFilters: WorkType.WorkFiltersPayload) => {
    // setFilter((prev) => ({
    //   ...prev,
    //   _page: 1,
    //   title_like: newFilters.search,
    // }));

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: 1,
          title_like: newFilters.search,
        },
      },
      undefined,
      {
        shallow: true, // tricker render bên client
      }
    );
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

        {router.isReady ? (
          <WorkFilters
            initalValue={"praesentium"}
            onSubmit={handleFilterChange}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            height={40}
            sx={{ display: "inline-block", mt: 2, mb: 1, width: "100%" }}
          />
        )}
        <WorkList
          workList={wordList?.data || []}
          loading={!router.isReady || isLoading}
        />

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
