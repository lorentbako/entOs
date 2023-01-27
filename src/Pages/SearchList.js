import React, { useEffect, useState } from "react";
import CardCompanies from "../Components/CardCompanies";
import getListData from "../HOC/getListData";
import getShipmentCompanies from "../HOC/getShipmentCompanies";
import styles from "../Styles/SearchPage.module.css";

const listAll = [{ id: "all", value: "all" }];

const SearchList = () => {
  const [listCountries, setListCountries] = useState([]);
  const [listAreas, setListAreas] = useState([]);
  const [areaSearch, setAreaSearch] = useState(listAll);
  const [countrySearch, setCountrySearch] = useState(listAll);
  const [shipmentCompanies, setShipmentCompanies] = useState("");

  // Get the filter values for Country in an array
  const handleCountryChange = (event) => {
    const selectedCountry = listCountries.find(
      (country) => country.value === event.target.value
    );

    if (event.target.value === "all") {
      setCountrySearch(listAll);
    } else if (
      !countrySearch.find((country) => country.value === selectedCountry.value)
    ) {
      setCountrySearch(
        countrySearch.filter((country) => country.value !== "all")
      );
      setCountrySearch((prev) => [...prev, selectedCountry]);
    }
  };
  const handleCountryRemove = (countryId) => {
    if (countrySearch.length === 1) {
      if (countrySearch[0].value === "all") {
        return;
      }
      setCountrySearch(listAll);
      return;
    }
    setCountrySearch(
      countrySearch.filter((country) => country.id !== countryId)
    );
  };

  // Get the filter values for Area in an array
  const handleAreaChange = (event) => {
    const selectedArea = listAreas.find(
      (area) => area.value === event.target.value
    );
    if (event.target.value === "all") {
      setAreaSearch(listAll);
    } else if (!areaSearch.find((area) => area.value === selectedArea.value)) {
      setAreaSearch(areaSearch.filter((area) => area.value !== "all"));
      setAreaSearch((prev) => [...prev, selectedArea]);
    }
  };

  const handleAreaRemove = (areaId) => {
    if (areaSearch.length === 1) {
      if (areaSearch[0].value === "all") {
        return;
      }
      setAreaSearch(listAll);
      return;
    }
    setAreaSearch(areaSearch.filter((area) => area.id !== areaId));
  };

  useEffect(() => {
    async function fetchData() {
      //Get the list of Countries and Companies
      const [countriesList, companiesList] = await getListData(0);
      setListCountries(countriesList);

      //get the list of Areas
      const areasList = await getListData(1);
      setListAreas(areasList);

      // retrive final data
      const shipmentCompanies = await getShipmentCompanies(
        areaSearch,
        countrySearch,
        companiesList
      );
      setShipmentCompanies(shipmentCompanies);
    }
    fetchData();
  }, [areaSearch, countrySearch]);

  return (
    <div>
      <div className={styles.searchList}>
        <div>
          <label htmlFor="country">Choose a country: </label>
          <select name="country" id="country" onChange={handleCountryChange}>
            <option value="all" defaultValue>
              All
            </option>
            {listCountries &&
              listCountries.map((country) => (
                <option key={country.id} value={country.value}>
                  {country.value}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="area">Choose a area: </label>
          <select name="area" id="area" onChange={handleAreaChange}>
            <option value="all" defaultValue>
              All
            </option>
            {listAreas &&
              listAreas.map((area) => (
                <option key={area.id} value={area.value}>
                  {area.value}
                </option>
              ))}
          </select>
        </div>
        <div>
          <span>Filtering by: </span>
          {countrySearch &&
            countrySearch.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountryRemove(country.id)}
              >
                {country.value}
              </button>
            ))}
        </div>
        <div>
          <span>Filtering by: </span>
          {areaSearch &&
            areaSearch.map((area) => (
              <button key={area.id} onClick={() => handleAreaRemove(area.id)}>
                {area.value}
              </button>
            ))}
        </div>
      </div>
      <div>
        {shipmentCompanies &&
          Object.entries(shipmentCompanies)
            .sort((a, b) => b[1] - a[1])
            .map((result) => (
              <CardCompanies
                key={result[0]}
                company={result[0]}
                shipment={result[1]}
              />
            ))}
      </div>
    </div>
  );
};

export default SearchList;
