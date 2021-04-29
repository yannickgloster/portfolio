import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import youtubePlaylistItem from "../types/youtube";

interface propsYouTubeCarousel {
  data: youtubePlaylistItem[];
}

interface propsYouTubeItem {
  image: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  url: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carousel: {
      width: 640,
      height: 480,
    },
  })
);

function YouTubeItem(props: propsYouTubeItem) {
  console.log(props);
  return (
    <Paper>
      <a href={props.url} target="_blank">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Box width="100%">
            <Typography variant="h4" align="center">
              {props.title}
            </Typography>
          </Box>
          <Box
            style={{
              height: props.image.height,
              width: props.image.width,
            }}
          >
            <Image
              src={props.image.url}
              imageStyle={{
                height: props.image.height,
                width: props.image.width,
              }}
            />
          </Box>
        </Box>
      </a>
    </Paper>
  );
}

export default function YouTubeCarousel({ data }: propsYouTubeCarousel) {
  const classes = useStyles();
  return (
    <Carousel className={classes.carousel} interval={10000}>
      {data.map((video, i) => (
        <YouTubeItem
          key={i}
          image={video.snippet.thumbnails.high}
          title={video.snippet.title}
          url={
            "https://www.youtube.com/watch?v=" +
            video.snippet.resourceId.videoId
          }
        />
      ))}
    </Carousel>
  );
}
