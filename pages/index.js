import * as React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: "url(overlay.png), url(howth.jpg)",
    minHeight: "100vh",
    minWidth: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

const WhiteTypography = withStyles((theme) => ({
  root: {
    color: "#FFFFFF",
  },
}))(Typography);

export default function Index() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item xs={12}>
        <WhiteTypography
          variant="h3"
          fontWeight="fontWeightBold"
          align="center"
          gutterBottom
        >
          Yannick Gloster
        </WhiteTypography>
        <Box display="flex" justifyContent="center">
          <Box margin={2}>
            <Button
              variant="contained"
              color="secondary"
              href="/yannickgloster_resume.pdf"
              target="_BLANK"
            >
              <InsertDriveFileIcon />
              <WhiteTypography
                style={{ paddingLeft: 4 }}
                variant="button"
                align="center"
              >
                Resume
              </WhiteTypography>
            </Button>
          </Box>
          <Box margin={2}>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.linkedin.com/in/yannickgloster/"
              target="_BLANK"
            >
              <LinkedInIcon />
              <WhiteTypography
                style={{ paddingLeft: 4 }}
                variant="button"
                align="center"
              >
                LinkedIn
              </WhiteTypography>
            </Button>
          </Box>
          <Box margin={2}>
            <Button
              variant="contained"
              color="secondary"
              href="https://github.com/yannickgloster"
              target="_BLANK"
            >
              <GitHubIcon />
              <WhiteTypography
                style={{ paddingLeft: 4 }}
                variant="button"
                align="center"
              >
                GitHub
              </WhiteTypography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
