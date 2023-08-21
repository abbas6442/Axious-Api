import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComp = ({ massage }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"8"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={["container.lg"]}
    >
      <AlertIcon />
      {massage}
    </Alert>
  );
};

export default ErrorComp;
