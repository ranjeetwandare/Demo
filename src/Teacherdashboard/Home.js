import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import Subject from "../images/student-icon.png";
import Token from "../images/Token.png";
import Teacher from "../images/teacher-png.png";
import Hours from "../images/hours.png";
import CountUp from "react-countup";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <StyledPaper>
              <img src={Subject} style={imgeStyle} alt="Subjects" />

              <Title>Class Students</Title>

              <Data start={0} end={10} duration={2.5} />
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <StyledPaper>
              <img src={Teacher} style={imgeStyle} alt="Assignments" />
              <Title>Total Lessons</Title>
              <Data start={0} end={15} duration={4} />
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <StyledPaper>
              <img src={Token} style={imgeStyle} alt="Subjects" />

              <Title>Total Token</Title>

              <Data start={0} end={10} duration={2.5} />
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <StyledPaper>
              <img src={Hours} style={imgeStyle} alt="Assignments" />
              <Title>Total Hours</Title>
              <Data start={0} end={15} duration={4} />
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                padding: "10px",
              }}
            >
              {" "}
              <span> No Notice To Show Right Now</span>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// const ChartContainer = styled.div`
//   padding: 2px;
//   display: flex;
//   flex-direction: column;
//   height: 240px;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   //
// `;

const imgeStyle = {
  width: "50px",
  hight: "auto",
};

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

// const Data = styled(CountUp)`
//   font-size: calc(1.3rem + .6vw);
//   color: green;
// `;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + 0.6vw);
  color: green;
`;

export default Home;
