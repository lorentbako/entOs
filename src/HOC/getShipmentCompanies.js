const getShipmentCompanies = async (
  areaSearch,
  countrySearch,
  companiesList
) => {
  const response = await fetch(
    `https://entos-739af-default-rtdb.firebaseio.com/3.json`
  );
  const responseData = await response.json();
  let companiesShipments = {};

  // get a company by its ID
  const getCompanyById = (companyId) =>
    companiesList.filter((company) => company.id === companyId)[0].value;

  //Custom function to populate data for the shipments per company
  const populateFilteredShipmentData = (shipment, companiesShipments) => {
    if (!companiesShipments[getCompanyById(shipment.companyId)]) {
      companiesShipments[getCompanyById(shipment.companyId)] = 1;
    } else {
      companiesShipments[getCompanyById(shipment.companyId)] += 1;
    }
  };
  //populate the shipments per company if no filters are selected
  if (areaSearch[0].id === "none" && countrySearch[0].id === "none") {
    for (const shipment of responseData) {
      populateFilteredShipmentData(shipment, companiesShipments);
    }
    return companiesShipments;
  }

  // when we are using both filters
  else if (areaSearch[0].value !== "none" && countrySearch[0].id !== "none") {
    for (const shipment of responseData) {
      if (
        areaSearch.find((area) => area.id === shipment.areaId) &&
        countrySearch.find(
          (country) =>
            country.value ===
            companiesList.find((c) => c.id === shipment.companyId).country
        )
      ) {
        populateFilteredShipmentData(shipment, companiesShipments);
      }
    }
    return companiesShipments;
  }

  //when we are filtering only by Area or only by Country
  else {
    for (const shipment of responseData) {
      if (
        areaSearch.find((area) => area.id === shipment.areaId) ||
        countrySearch.find(
          (country) =>
            country.value ===
            companiesList.find((c) => c.id === shipment.companyId).country
        )
      ) {
        populateFilteredShipmentData(shipment, companiesShipments);
      }
    }
    return companiesShipments;
  }
};

export default getShipmentCompanies;
