import React from "react";
import { useState, useEffect } from "react";
import SingleCountry from "./SingleCountry";
import { ALL_COUNTRIES } from "../utils/api";
import axios from "axios";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const apiURL = `https://restcountries.com/v3.1/all`

  const getAllCountries = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    setCountries(data)
    // console.log(data)
  }
  useEffect(() => {
    getAllCountries()
  }, [])
  return (
    <div className="container mx-auto dark:bg-red-600 dark:text-white">
      <ul className="grid grid-cols-4 grid-rows-1 gap-[75px] list-none p-0 m-0">
        {countries?.map(country => {
          return <SingleCountry country={ country } key={ country.name.common } />
        })}
      </ul>
    </div>
  );
}
