import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IBasicCommodity } from "types/commodity";
import CommodityItem from "./CommodityItem";

interface CommodityListProps {
  commodities: IBasicCommodity[] | undefined;
  isDataLoaded: boolean;
  title: string;
}

const CommodityList: React.FC<CommodityListProps> = ({
  commodities,
  title,
  isDataLoaded,
}) => {
  const colorTitle = useColorModeValue("red.700", "red.400");

  if (!isDataLoaded) {
    return (
      <Stack spacing={6} mt={6}>
        <Skeleton h="300px" />
        <Skeleton h="300px" />
        <Skeleton h="300px" />
      </Stack>
    );
  }

  return (
    <>
      <Box my="2em">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          color={colorTitle}
        >
          {title}
        </Text>
        <SimpleGrid
          mt={8}
          spacing={6}
          columns={[1, 2, 3]}
          data-aos="fade-down"
          data-aos-delay={500}
        >
          {commodities?.map((item, index) => (
            <CommodityItem
              key={index}
              id={item.id}
              price={item.price}
              region={item.region}
              commodity={item.commodity}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CommodityList;
