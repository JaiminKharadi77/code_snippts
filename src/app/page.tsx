import CodeCard from "./components/CodeCard";
import Grid from "@mui/material/Grid";

export default function Home() {
  const simp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Grid container spacing={3} justifyContent="start" sx={{ padding: 3 }}>
      {simp.map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CodeCard />
        </Grid>
      ))}
    </Grid>
  );
}
