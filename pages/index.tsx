import React from "react";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import Link from "../src/Link";
import Copyright from "../src/Copyright";
import YouTubeCarousel from "../src/YouTube";

import youtubePlaylistItem from "../types/youtube";

interface props {
  data_youtube: youtubePlaylistItem[];
}

export async function getServerSideProps() {
  let data_youtube: youtubePlaylistItem[] = [];
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLTnUyWANT57Prp9BGGh6bYFZ8y4eUN7wE&key=${process.env.YOUTUBE_API_KEY}`
    );
    data_youtube = await res.data.items;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      data_youtube,
    },
  };
}

function getSteps() {
  return ["About", "Work Experience", "Education", "Projects", "Videos"];
}

function getStepContent(step: number, data_youtube: youtubePlaylistItem[]) {
  switch (step) {
    case 0:
      return (
        <Grid container spacing={2} style={{ flexGrow: 1 }} alignItems="center">
          <Grid item xs={3}>
            <Image
              src="https://yannickgloster.com/images/headshot.jpeg"
              imageStyle={{ borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h3" gutterBottom>
              Yannick Gloster
            </Typography>
            <Typography variant="body1" gutterBottom>
              I'm a hardworking and driven computer science student at trinity
              College dublin. I received first class honors for both first and
              second years.
            </Typography>
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Box>
          <Avatar variant="square">MS Logo</Avatar>
          <Typography variant="h3" gutterBottom>
            Microsoft
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Date - Date
          </Typography>

          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            🔗Link 1
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            🔗Link 2
          </Typography>
        </Box>
      );
    case 2:
      return (
        <Box>
          <Avatar variant="square">TCD Logo</Avatar>
          <Typography variant="h3" gutterBottom>
            Trinity College Dublin
          </Typography>
          <Typography variant="h5" gutterBottom>
            Integrated Computer Science
          </Typography>
          <Typography variant="h5" gutterBottom>
            Tangent Course
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            1st - 82%
          </Typography>
          <Typography variant="body1" gutterBottom>
            Course Description
          </Typography>
          <li>
            <Typography variant="body2" gutterBottom>
              Linked Course -
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              mark
            </Typography>
          </li>
        </Box>
      );
    case 3:
      return <Box>Project Card</Box>;
    case 4:
      return <YouTubeCarousel data={data_youtube} />;
    default:
      return "Unknown step";
  }
}

export default function Index({ data_youtube }: props) {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Yannick Gloster
        </Typography>
        <Button variant="contained">Toggle Darkmode</Button>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index, data_youtube)}</Typography>
                <Box>
                  <Box>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Paper>
        )}
        <Copyright />
      </Box>
    </Container>
  );
}
