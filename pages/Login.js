import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import Password from "./Login_com/Password";
import Main_Heading from "./Login_com/Main_Heading";
import Input_use from "./Login_com/Input_use";
import Button_sub from "./Login_com/Button_sub";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        color={"white"}
        w="400px"
        m={"auto"}
        padding="auto"
        h="70vh"
      >
        <Flex 
        direction={"column"}
        boxShadow={"1px 1px 20px 8px black;"}
        borderRadius={"25px"}
        style={{background:"#363636"}}
        >
        <Main_Heading/>
        <Input_use></Input_use>
          <Password/>
        <Button_sub/>
        <div style={{textAlign:"center" , marginBottom:"10px"}}>
             <Link href='./SignUp' >Don't Have account Creat One</Link>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
