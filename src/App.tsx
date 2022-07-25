import { useCallback, useContext, useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
import { maxBy } from "lodash";

import { fetchDataCommodity, IResponseAPI } from "data/data-source";
import { DataContext, DataContextType } from "context/DataContext";

import { IBasicCommodity } from "types/commodity";

import Navbar from "components/Layout/Navbar";
import Jumbotron from "components/Jumbotron";
import CommodityList from "components/CommodityList";
import SearchCommodityRegion from "components/SearchCommodityRegion";
import Footer from "components/Layout/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

const { ToastContainer } = createStandaloneToast();

const App = () => {
  const { setLastUpdate } = useContext(DataContext) as DataContextType;

  const [responseAPI, setResponseAPI] = useState<IResponseAPI>();
  const [highestCommodities, setHighestCommodities] =
    useState<IBasicCommodity[]>();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchDataCommodity();
      setResponseAPI(data);
      setLastUpdate(data?.updated_at);
    } catch (error) {
      setLastUpdate(" .... ");
    } finally {
      setIsDataLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (responseAPI !== undefined) {
      let highestPriceItem: IBasicCommodity[] = [];
      let nationalCommodity = responseAPI?.national_commodity_price;
      for (const key of Object.keys(nationalCommodity || {})) {
        let province = maxBy(
          responseAPI?.national_commodity_price[key],
          "value"
        );
        if (key === "Cabai Rawit") continue;
        highestPriceItem.push({
          id: Number(province?.id),
          commodity: key,
          price: province?.display,
          region: province?.name,
        });
      }
      setHighestCommodities(highestPriceItem);
    }
  }, [responseAPI]);

  useEffect(() => {
    document.title = "Monitor Harga Sembako";
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxW="7xl" mt="2em">
        <Jumbotron />
        <CommodityList
          title="Highest Price Commodities 📈"
          isDataLoaded={isDataLoaded}
          commodities={highestCommodities}
        />
        <SearchCommodityRegion
          rawData={responseAPI?.national_commodity_price}
        />
        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
};

export default App;
