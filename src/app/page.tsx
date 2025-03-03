"use client";

import CodeCard from "./components/CodeCard";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { CodeEditorCard } from "./components/CodeEditor"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/snippts");
};

export default function Home() {


  const [title, setTitle] = useState<string>("Yo Boys");
  const [code, setCode] = useState<string>("ZnVuY3Rpb24gcmVjKG4pewogICAgaWYobjwyKSByZXR1cm4gMTsKICAgIHJldHVybiBuKnJlYyhuLTEpOwp9Cgpjb25zb2xlLmxvZyhyZWMoNCkpOw");

  const handleSave = () => {
    console.log("Saved Code:", { title, code });
  };

  const [view, setView] = useState<Boolean>(false)

  const { isLoading, data } = useQuery("all-snippts", fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading ....</h2>;
  }



  return (
    <>
      {!view ?
        <Grid container spacing={3} justifyContent="start" sx={{ padding: 3 }}>
          {data?.data?.map((_: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CodeCard title={_.name} code={""} codingLangaugae={""} onClick={() => setView(true)} />
            </Grid>
          ))}
        </Grid>
        : <CodeEditorCard
          title={title}
          setTitle={setTitle}
          code={code}
          setCode={setCode}
          handleSave={handleSave}
          onClick={() => setView(false)}
        />}
    </>
  );
}
