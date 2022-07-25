import { Text, VStack } from "@chakra-ui/react";
import { InitialSearchProps } from "./SearchResultInitial";
import { ReactComponent as SVGNotFound } from "assets/not_found.svg";

interface SearchNotFoundProps extends InitialSearchProps {
  province: string;
}

const SearchResultNotFound: React.FC<SearchNotFoundProps> = ({
  province,
  colorTitle,
  isSmallViewport,
}) => {
  return (
    <VStack>
      <Text
        fontWeight="bold"
        textAlign="center"
        color={colorTitle}
        fontSize={["1xl", "2xl"]}
      >
        {" "}
        Sorry{" "}
      </Text>
      <SVGNotFound
        width={isSmallViewport ? "300px" : "400px"}
        height={isSmallViewport ? "200px" : "300px"}
      />
      <Text
        fontWeight="bold"
        textAlign="center"
        color={colorTitle}
        fontSize={["1xl", "2xl"]}
      >
        {" "}
        Cannot Find Province : {province}{" "}
      </Text>
    </VStack>
  );
};

export default SearchResultNotFound;
