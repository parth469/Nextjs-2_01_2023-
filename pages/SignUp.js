import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import Password from "./Signup/Password";
import Main_Heading from "./Signup/Main_Heading";
import Input_use from "./Signup/Input_use";
import Button_sub from "./Signup/Button_sub";
import Conf_password from "./Signup/Conf_password";
import Email from "./Signup/Email";
import Link from "next/link";
export default function SignUp() {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        color={"white"}
        w="400px"
        m={"30px auto"}
        padding="auto"
        h="70vh"
      >
        <Flex
          direction={"column"}
          boxShadow={"1px 1px 20px 8px black;"}
          borderRadius={"25px"}
          style={{ background: "#363636" }}
        >
          <Main_Heading />
          <Input_use></Input_use>
          <Email></Email>
          <Password />
          <Conf_password></Conf_password>
          <Button_sub />
          <div style={{textAlign:"center" , marginBottom:"10px"}}>
             <Link href='./Login' >Go-to Login</Link>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
