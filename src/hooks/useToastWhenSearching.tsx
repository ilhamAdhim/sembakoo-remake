import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const useToastWhenSearching = (
  isSearchedCityAvailable: boolean | undefined,
  inputValue: string
) => {
  const toast = useToast();

  useEffect(() => {
    if (isSearchedCityAvailable !== undefined)
      if (isSearchedCityAvailable) {
        toast({
          title: `Menampilkan hasil pencarian : ${inputValue} `,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else
        toast({
          title: "Gagal Menampilkan hasil pencarian",
          description: (
            <>
              {" "}
              Provinsi tidak ditemukan. Contoh : <b> Jawa Timur </b>{" "}
            </>
          ),
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
  }, [isSearchedCityAvailable]);
};

export default useToastWhenSearching;
