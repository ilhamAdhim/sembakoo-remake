import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ViewIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box></Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://raw.githubusercontent.com/ilhamAdhim/personal-website/main/public/images/my-profile.jpg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/ilhamAdhim/sembakoo-remake/tree/master/src"
                    display="flex"
                    p="2"
                    justifyContent="space-between"
                  >
                    Check Source Code
                    <ViewIcon />
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
