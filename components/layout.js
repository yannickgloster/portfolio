import { Box, Card, Image, Heading, Text, Flex, Button, Link } from "rebass";
import { ThemeProvider } from "theme-ui";
import sailing from "../themes/sailing";

const Layout = props => (
  <ThemeProvider theme={sailing}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Flex px={2} alignItems="center" bg="primary">
        <Link fontWeight="bold" href="/">
          YannickGloster.com
        </Link>
        <Box mx="auto" />
        <Link p={2} href="/cs">
          Computer Science
        </Link>
        <Link p={2} href="/media">
          Media
        </Link>
        <Link p={2} href="/sailing">
          Sailing
        </Link>
      </Flex>
      <Box
        sx={{
          flex: "1 1 auto",
          p: 2
        }}
      >
        {props.children}
      </Box>
      <Box
        sx={{
          p: 2
        }}
      >
        © Yannick Gloster {new Date().getFullYear()}
      </Box>
    </Box>
  </ThemeProvider>
);

export default Layout;
