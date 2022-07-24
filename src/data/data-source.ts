const fetchDataCommodity = async () => {
  try {
    const response = await fetch("https://jibs.my.id/api/harga_komoditas");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { fetchDataCommodity };
