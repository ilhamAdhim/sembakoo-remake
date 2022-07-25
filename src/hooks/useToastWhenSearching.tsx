import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { ucfirst } from "utils";

const useToastWhenSearching = (
  isSearchedCityAvailable: boolean | undefined,
  inputValue: string
) => {
  const toast = useToast();

  useEffect(() => {
    if (isSearchedCityAvailable !== undefined)
      if (isSearchedCityAvailable) {
        toast({
          title: `Menampilkan hasil pencarian : ${ucfirst(inputValue)} `,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchedCityAvailable]);
};

export default useToastWhenSearching;
