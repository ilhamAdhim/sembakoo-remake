import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

import { find, sortBy } from "lodash";

import useSmallViewport from "hooks/useViewport";
import InitialSearch from "./SearchResult/SearchResultInitial";
import SearchResultNotFound from "./SearchResult/SearchResultNotFound";
import useToastWhenSearching from "hooks/useToastWhenSearching";
import { DataContext, DataContextType } from "context/DataContext";
import { IBasicCommodity, ICommodityListAPI } from "types/commodity";
import CommodityList from "./CommodityList";

interface SearchCommodityRegionProps {
  rawData: ICommodityListAPI | undefined;
}

const SearchCommodityRegion: React.FC<SearchCommodityRegionProps> = ({
  rawData,
}) => {
  const { isSmallViewport } = useSmallViewport();

  const colorTitle = useColorModeValue("red.700", "red.400");
  const buttonColor = useColorModeValue("yellow.700", "yellow.400");

  const [isSearching, setIsSearching] = useState(false);
  const [isSearchedCityAvailable, setIsSearchedCityAvailable] =
    useState<boolean>();

  const [provinceSearchResult, setProvinceSearchResult] = useState<
    IBasicCommodity[]
  >([]);

  const [inputValue, setInputValue] = useState("");

  useToastWhenSearching(isSearchedCityAvailable, inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    setIsSearching(false);
  };

  const handleSearch = () => {
    setIsSearching(true);
    let commoditySearchProvince: IBasicCommodity[] = [];

    for (const key of Object.keys(rawData || {})) {
      if (rawData !== undefined && rawData[key] !== undefined) {
        let searchResult = find(rawData[key], (item) => {
          return item.name.toLowerCase() === inputValue.toLowerCase();
        });
        if (key === "Cabai Rawit") continue;

        if (searchResult !== undefined)
          commoditySearchProvince.push({
            id: Number(searchResult.id),
            commodity: key,
            price: searchResult.display,
            region: searchResult.name,
          });
      }
    }

    commoditySearchProvince = sortBy(commoditySearchProvince, "price");

    if (commoditySearchProvince.length > 0) {
      setProvinceSearchResult(commoditySearchProvince);
      setIsSearchedCityAvailable(true);
    } else setIsSearchedCityAvailable(false);
  };

  return (
    <>
      <Text
        fontWeight="bold"
        textAlign="center"
        color={colorTitle}
        fontSize={["1xl", "2xl"]}
      >
        Commodities in My Area
      </Text>

      <Flex justifyContent="center" gap="1em" my="2em">
        <InputGroup w="300px">
          <Input
            pr="4.5rem"
            onChange={handleInputChange}
            placeholder="Search Province ..."
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          {inputValue !== "" && (
            <InputRightElement>
              <Button
                rounded="full"
                onClick={handleReset}
                backgroundColor="unset"
              >
                <CloseIcon fontSize=".8em" />
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        <Button rounded={"full"} color={buttonColor} onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </Flex>

      {isSearching ? (
        <>
          {isSearchedCityAvailable ? (
            <CommodityList
              commodities={provinceSearchResult}
              isDataLoaded
              title="Hasil pencarian"
            />
          ) : (
            <SearchResultNotFound
              province={inputValue}
              colorTitle={colorTitle}
              isSmallViewport={isSmallViewport}
            />
          )}
        </>
      ) : (
        <InitialSearch
          isSmallViewport={isSmallViewport}
          colorTitle={colorTitle}
        />
      )}
    </>
  );
};

export default SearchCommodityRegion;
