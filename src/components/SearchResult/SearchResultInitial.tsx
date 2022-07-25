import { Box, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as SVGInitialSearch } from "assets/initial_search_area.svg";

export interface InitialSearchProps {
  isSmallViewport: boolean;
  colorTitle: string;
}

const InitialSearch: React.FC<InitialSearchProps> = ({
  isSmallViewport,
  colorTitle,
}) => (
  <VStack>
    <Box m="auto">
      <SVGInitialSearch
        width={isSmallViewport ? "300px" : "400px"}
        height={isSmallViewport ? "200px" : "300px"}
      />
      <Text
        fontWeight="bold"
        textAlign="center"
        color={colorTitle}
        fontSize={["1xl", "2xl"]}
      >
        Let's Start Searching 🔍
      </Text>
    </Box>
  </VStack>
);

export default InitialSearch;
