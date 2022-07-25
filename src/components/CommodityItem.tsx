import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import useSmallViewport from "hooks/useViewport";

import { IBasicCommodity } from "types/commodity";
import LazyImage from "./LazyImage";

const CommodityItem = (props: IBasicCommodity) => {
  const { commodity, price, region } = props;
  const { isSmallViewport } = useSmallViewport();

  return (
    <Box
      rounded="xl"
      data-aos="fade-left"
      data-aos-delay={100}
      boxShadow={useColorModeValue("1px 1px 5px gray", "1px 1px 5px skyblue")}
      _hover={{
        transform: "scale(1.05)",
        transition: "all .2s ease-in-out",
      }}
    >
      <Flex
        gap="1em"
        rounded="xl"
        align="start"
        justify="space-evenly"
        flexDir={isSmallViewport ? "column" : "row"}
        bg={useColorModeValue("white", "gray.800")}
      >
        <Box>
          <LazyImage
            width={isSmallViewport ? "100%" : "200px"}
            height={isSmallViewport ? "100%" : "200px"}
            src={`${process.env.PUBLIC_URL}/assets/komoditas/${commodity
              ?.toLowerCase()
              .replace(" ", "-")}.png?raw=true`}
          />
        </Box>
        <Flex textAlign={["center", "start"]} flexDir="column" m="auto">
          <Text fontWeight="bold"> {commodity} </Text>
          <Text> {price} </Text>
          <Text> {region} </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CommodityItem;
