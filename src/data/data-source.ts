import { createStandaloneToast } from "@chakra-ui/toast";
import { LastUpdateType } from "context/DataContext";
import { ICommodityResponseAPI } from "types/commodity";

const { toast } = createStandaloneToast();

export interface IResponseAPI extends ICommodityResponseAPI {
  updated_at?: LastUpdateType;
}

const fetchDataCommodity = async () => {
  try {
    const response = await fetch("https://jibs.my.id/api/harga_komoditas");
    const data: IResponseAPI = await response.json();
    return data;
  } catch (error) {
    toast({
      title: "Terjadi kesalahan saat mengambil data",
      description: "Periksa koneksi internet Anda",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export { fetchDataCommodity };
