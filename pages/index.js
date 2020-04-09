import Layout from "../components/layout";
import { Box, Card, Image, Heading, Text, Flex, Button, Link } from "rebass";

export default function Index() {
  return (
    <Layout>
      <Card width={[128, 256]}>
        <Image src="/img/headshot.jpeg" sx={{ borderRadius: 2 }} />
        <Heading>Yannick Gloster</Heading>
      </Card>
    </Layout>
  );
}
