import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btc from "../components/images/bitcoin-security.jpg";

const Home = () => {
  return (
    <VStack pt={"0px"} bgColor={"black"} h={"90vh"}>
      <Image w={"100%"} h={"75vh"} src={btc} filter={"grayscale(1)"} />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"gray"}
        mt={"-29"}
      >
        Kcrypton
      </Text>
    </VStack>
  );
};

export default Home;
