import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

export default function Password(){
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <InputGroup size="md">
        <Input 
          pr="4.5rem"
          border={"none"}
          borderBottom={"2px solid  aqua"}
          margin="20px"

          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem"   margin="20px">
          <Button  color="white" bgColor={"#363636"} h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
