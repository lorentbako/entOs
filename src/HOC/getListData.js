const getListData = async (table) => {
  const response = await fetch(
    `https://entos-739af-default-rtdb.firebaseio.com/${table}.json`
  );
  const responseData = await response.json();

  //return data for table 0 (table companies) where we can get list of Countries and list of Companies
  if (table === 0) {
    let countriesList = responseData.reduce((acc, curr, index) => {
      if (!acc.find((item) => item.value === curr.country)) {
        acc.push({ id: index, value: curr.country });
      }
      return acc;
    }, []);

    let companiesList = [];
    for (const key of responseData) {
      companiesList.push({
        id: key.companyId,
        value: key.name,
        country: key.country,
      });
    }
    const result = [countriesList, companiesList];
    return result;
  }
  //return data for table 1 list of Areas
  else if (table === 1) {
    let areasList = [];
    for (const key of responseData) {
      areasList.push({
        id: key.areaId,
        value: key.state,
      });
    }
    return areasList;
  } 
};

export default getListData;
