import React from "react";
import useData from "./useData";

interface Platforms {
  //   count: number;
  //   results: {
  //     id: number;
  //     name: string;
  //     slug: string;
  //   }[];
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
