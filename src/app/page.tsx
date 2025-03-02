"use client";

import CodeCard from "./components/CodeCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import axios from "axios";

const fecthSuperHeroes = () => {
  return axios.get("http://localhost:4000/snippts");
};

export default function Home() {
  const simp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const { isLoading, data } = useQuery("all-snippts", fecthSuperHeroes);

  if (isLoading) {
    return <h2>Loading ....</h2>;
  }

  return (
    <Grid container spacing={3} justifyContent="start" sx={{ padding: 3 }}>
      {data?.data?.map((_: any, index: number) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CodeCard title={_.name} code={""} codingLangaugae={""} />
        </Grid>
      ))}
    </Grid>
  );
}
