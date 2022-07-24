import {
  Box,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { DataContext, DataContextType } from "context/DataContext";
import useSmallViewport from "hooks/useViewport";
import React, { useContext } from "react";
import JumbotronSVG from "./JumbotronSVG";

interface JumbotronTextProps {
  isCaption: boolean | undefined;
  children: React.ReactNode;
}

const JumbotronText: React.FC<JumbotronTextProps> = ({
  isCaption,
  children,
}) => {
  const textColor = useColorModeValue("red", "red.400");
  const { isSmallViewport } = useSmallViewport();

  return (
    <Text
      mb="1em"
      textAlign={isSmallViewport ? "center" : "justify"}
      fontSize={
        isSmallViewport
          ? isCaption
            ? "1xl"
            : "2xl"
          : isCaption
          ? "2xl"
          : "3xl"
      }
      color={textColor}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

function Jumbotron() {
  const { isSmallViewport } = useSmallViewport();

  const { lastUpdate } = useContext(DataContext) as DataContextType;

  const { colorMode } = useColorMode();

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      flexDir={["column-reverse", "row"]}
    >
      <Box flex={2} mt={["1em", "10em"]} ml={[0, "10em"]}>
        <div data-aos="fade-right">
          <JumbotronText isCaption={false}>Sembakoo.id</JumbotronText>
          <JumbotronText isCaption>
            📉 Get latest price for sembako
          </JumbotronText>
          <JumbotronText isCaption>
            ⌚ Last updated on {lastUpdate}
          </JumbotronText>

          <br />
          <Flex justify={isSmallViewport ? "center" : "start"}>
            <a href="#search_section">
              <Button
                role="button"
                textAlign={isSmallViewport ? "center" : "justify"}
              >
                Check My Region
              </Button>
            </a>
          </Flex>
        </div>
      </Box>
      <Box>
        <JumbotronSVG
          height={isSmallViewport ? 400 : 600}
          width={isSmallViewport ? 380 : 600}
          color={colorMode}
        />
      </Box>
    </Flex>
  );
}

export default Jumbotron;
