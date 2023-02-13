import React, { useEffect, useState } from "react";
import getListData from "./../HOC/getListData";

export const ListContext = React.createContext();

export const ListsProvider = ({ children }) => {
  const [listCountries, setListCountries] = useState([]);
  const [listAreas, setListAreas] = useState([]);
  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    async function fetchLists() {
      //Get the list of Countries and Companies
      const [countriesList, companiesListCalled] = await getListData(0);
      setListCountries(countriesList);
      setCompaniesList(companiesListCalled);

      //get the list of Areas
      const areasList = await getListData(1);
      setListAreas(areasList);
    }
    fetchLists();
  }, []);

  return (
    <ListContext.Provider value={{ listCountries, listAreas, companiesList }}>
      {children}
    </ListContext.Provider>
  );
};
