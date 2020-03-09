import Layout from "../components/layout";
import { Box, Card, Image, Heading, Text, Flex, Button, Link } from "rebass";

export default function Index() {
  return (
    <Layout>
      <Image
        src="/img/headshot.jpeg"
        sx={{
          width: ["25%", "12%"],
          borderRadius: 8
        }}
      />
      <br />
      <a href="https://github.com/yannickgloster" target="_blank">
        <Button variant="buttons.primary" mr={2} p="2">
          <i className="fa fa-github-alt"></i> Github
        </Button>
      </a>
      <br />
      <a href="https://github.com/yannickgloster" target="_blank">
        <Button variant="primary" mr={2} p="2">
          <i className="fa fa-github-square"></i> Github
        </Button>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/yannickgloster/" target="_blank">
        <Button variant="primary" mr={2} p="2">
          <i className="fa fa-linkedin"></i> LinkedIn
        </Button>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/yannickgloster/" target="_blank">
        <Button variant="primary" mr={2} p="2">
          <i className="fa fa-linkedin-square"></i> LinkedIn
        </Button>
      </a>
      <br />
      <a href="/doc/yannickgloster_resume.pdf" target="_blank">
        <Button variant="primary" mr={2} p="2">
          <i className="fa fa-file-pdf-o"></i> Resume
        </Button>
      </a>
      <br />
      <a
        href="https://www.youtube.com/channel/UCFzK9lxiqMvvPVu7Q3ojCIQ"
        target="_blank"
      >
        <Button variant="primary" mr={2} p="2">
          <i className="fa fa-youtube-play "></i> YouTube
        </Button>
      </a>
    </Layout>
  );
}
