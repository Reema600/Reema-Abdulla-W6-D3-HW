import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
  } from "@chakra-ui/react";
 
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";

export default function Fotter() {
  return (
    <div>
 <Box bg="white" _dark={{ bg: "gray.600" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex justify="center">
          <Image
            src="Club Logo.png"
            alt="Company Logo"
            rounded="lg"
            width={{ base: "150px", lg: "200px" }}
            height={{ base: "75px", lg: "200px" }}
            my={{ base: 2, lg: 0 }}
          />
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="gray.800"
          _dark={{ color: "white" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Junky Books </Link>
            <Link textTransform="uppercase">BOOKS
 was established in 2023 with the vision to provide an extensive library of books in digital format for free on the Internet.</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Services</Link>
            <Link textTransform="uppercase">Theme Tweak</Link>
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="gray.800"
          _dark={{ color: "white" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Show Case</Link>
            <Link textTransform="uppercase">Widget Kit</Link>
            <Link textTransform="uppercase">Support</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">About Us</Link>
            <Link textTransform="uppercase">Contact Us</Link>
            <Link textTransform="uppercase">Resources</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{ color: "#F9FAFB" }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              color="gray.800"
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>
          <Link>
            <Icon
              color="gray.800"
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FiTwitter}
            />
          </Link>
          <Link>
            <Icon
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
          <Link>
            <Icon
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
        </HStack>

        <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
          &copy;Copyright. All rights reserved.
        </Text>
      </VStack>
    </Box>


    </div>
  )
}
