
import { Badge, Box, Flex, Image, Text,SimpleGrid} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";


export default function Cart() {
    
    const property = {
        imageUrl: "https://f.nooncdn.com/p/v1510484937/N11696904A_1.jpg?format=avif&width=240",
        imageAlt: "Book",
        // Reeds: 3,
        // baths: 2,
        title: "لأنك الله",
        formattedPrice: "by Ali Bin Jaber Al Faify",
        reviewCount: 34,
        rating: 5,
      };
      const property2 = {
        imageUrl: "https://f.nooncdn.com/p/v1591357962/N38443824A_1.jpg?format=avif&width=240",
        imageAlt: "book",
        // Reeds: 3,
        // baths: 2,
        title: "فن اللامبالاة لعيش حياة تخالف المألوف",
        formattedPrice: "by Mark Manson",
        reviewCount: 30,
        rating: 4,
      };
      const property3 = {
        imageUrl: "https://f.nooncdn.com/p/v1594020916/N36736173A_1.jpg?format=avif&width=240",
        imageAlt: "Book",
        // Reeds: 3,
        // baths: 2,
        title: "صاحب الظل الطويل",
        formattedPrice: "by Webster Jean",
        reviewCount: 25,
        rating: 3,
      };
      const property4 = {
        imageUrl: "https://f.nooncdn.com/p/v1672139865/N11155834A_1.jpg?format=avif&width=240",
        imageAlt: "Book",
        // Reeds: 3,
        // baths: 2,
        title: "A Little Life",
        formattedPrice: "by Hanya Yanagihara ",
        reviewCount: 15,
        rating: 3,
      };
  return (
    <div>
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
<Flex
      bg="#e6e7e8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
            The Best
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {/* {property.beds} beds &bull; {property.baths} baths */}
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property.title}
          </Text>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
    {/* ============================================== */}
    <Flex
      bg="#e6e7e8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Image
          src={property2.imageUrl}
          alt={property2.imageAlt}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
            The Best
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {/* {property2.beds} beds &bull; {property2.baths} baths */}
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property2.title}
          </Text>

          <Box>
            {property2.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property2.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property2.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
    {/* ============================================== */}
    <Flex
      bg="#e6e7e8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Image
          src={property3.imageUrl}
          alt={property3.imageAlt}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {/* {property3.beds} beds &bull; {property3.baths} baths */}
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property3.title}
          </Text>

          <Box>
            {property3.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property3.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property3.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
    {/* ============================================== */}
    <Flex
      bg="#e6e7e8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Image
          src={property4.imageUrl}
          alt={property4.imageAlt}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {/* {property4.beds} beds &bull; {property4.baths} baths */}
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property4.title}
          </Text>

          <Box>
            {property4.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property4.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property4.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
    </SimpleGrid>
    </div>
   
  )
}
