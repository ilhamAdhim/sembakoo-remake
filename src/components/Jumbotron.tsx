import {
  Box,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { LastUpdateContext } from "../context/LastUpdateContext";
import { LastUpdateContextType } from "../types/lastUpdate";
import JumbotronSVG from "./JumbotronSVG";

function Jumbotron() {
  const { lastUpdate } = useContext(LastUpdateContext) as LastUpdateContextType;

  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("red", "red.400");

  return (
    <Flex width="100%" justifyContent="space-between">
      <Box flex={2} mt="10em" ml="10em">
        <div className="text_jumbotron_section" data-aos="fade-right">
          <Text fontSize="5xl" color={textColor} fontWeight="bold" mb="1em">
            Sembakoo.id
          </Text>
          <Text fontSize="2xl" color={textColor} fontWeight="bold" mb="1em">
            📉 Get latest price for sembako
          </Text>
          <Text fontSize="2xl" color={textColor} fontWeight="bold" mb="1em">
            <>⌚ Last updated on {lastUpdate}</>
          </Text>

          <br />
          <a href="#search_section">
            <Button className="button_jumbotron" role="button">
              Check My Region
            </Button>
          </a>
        </div>
      </Box>
      <Box>
        <JumbotronSVG width={600} height={600} color={colorMode} />
      </Box>
    </Flex>
  );
}

export default Jumbotron;
