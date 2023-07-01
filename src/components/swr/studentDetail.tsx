import axiosClient from "@/api-client/axios-client";
import React from "react";
import useSWR from "swr";

type Props = {
  studentId: any;
};

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export const StudentDetail = ({ studentId }: Props) => {
  const { data, error, mutate, isValidating, isLoading } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000, // 2s  mới callback
    }
  );

  const handleMutate = () => {
    // nếu là false thì nó k call api cập nhật data ngầm
    // đối với tham số thứ 2 là true thì khi nó cập nhật UI thì nó call API chạy ngầm
    mutate({ name: "phaquang" }, false);
  };

  console.log("data", isLoading, data);
  return (
    <div>
      {data ? data?.name : "--"}{" "}
      <button className="border border-solid px-4 py-2" onClick={handleMutate}>
        mutate
      </button>
    </div>
  );
};
