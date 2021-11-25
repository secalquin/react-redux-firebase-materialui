import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Layout from "../../components/Layout";

const HomePage = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 150,
          }}
        >
          <h1>Home Page</h1>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default function Home(props) {
  return <Layout title={"Home"} page={<HomePage />} />;
}
