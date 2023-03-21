import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Icon,
  StackProps,
  Stack,
  Flex,
} from "@chakra-ui/react";
import CheckIcon from "../../Icons/Icons";

const Listitem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" {...rest} spacing={"24px"}>
      <Icon as={CheckIcon} w={"24px"} h={"24px"} />
      <Text>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <div>
      <Box
        width={{base:96, lg:'920px'}}
        mx={{lg:'auto', base:'2'}}
        mt={{lg:'-64', base:'-80'}}
        borderRadius={"12PX"}
        overflow={"hidden"}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={{base:'column', lg:'row'}}>
          <Box bg="#F0EAFB" p={{lg:'16', base:'8'}} w={{base:96, lg:'378px'}} h={"312px"} textAlign="center">
            <Text fontSize={"24px"} fontWeight={800}>
              Premium Pro
            </Text>
            <Heading fontSize={"60px"} mt={{base:3, lg:4}}>
              $360
            </Heading>
            <Text color={"#121930"} fontSize={18} mt={"8px"}>
              billed just once
            </Text>
            <Button colorScheme={"purple"} mt={"24px"} w={242} size="lg">
              Get Started
            </Button>
          </Box>
          <Box p={{lg:12, base:4}} bg={"white"} w={{base:96, lg:'616px'}}>
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as={"ul"} spacing={5} pt={{lg:6, base:3}}>
              <Listitem>International calling and messaging API</Listitem>
              <Listitem>Additional phone numbers</Listitem>
              <Listitem>Automated messages via Zapier</Listitem>
              <Listitem>24/7 support and consulting</Listitem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
