import { Container } from "@material-ui/core";

const border = {
  border: "1px solid #DDD",
};

const Layout = (props) => (
  <Container maxWidth="sm" style={border}>
    {props.children}
  </Container>
);

export default Layout;
