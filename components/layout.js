const border = {
  border: "1px solid #DDD",
};

import { Container } from "semantic-ui-react";

const Layout = (props) => (
  <Container style={border}>
    <p>{props.children}</p>
  </Container>
);

export default Layout;
