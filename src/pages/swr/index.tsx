import { StudentDetail } from "@/components/swr";
import React, { useState } from "react";

type Props = {};

const PageSwr = (props: Props) => {
  const [detailList, setDetailList] = useState([1, 1, 1]);

  const handleClick = () => {
    setDetailList((prev) => [...prev, 1]);
  };
  return (
    <div>
      <p>PageSwr</p>
      <button onClick={handleClick} className="border border-solid px-4 py-2">
        Add
      </button>
      <ul>
        {detailList.map((i, index) => (
          <li key={index}>
            <StudentDetail studentId={"lea11ziflg8xoiza"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageSwr;
