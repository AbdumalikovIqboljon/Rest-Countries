import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { apiURL } from "../util/api";
import { Link } from "react-router-dom";
import LeftArrow from './../assets/svgs/LeftArrow';

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();

  const borders = country.map((country) => country.borders);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [name]);

  return (
    <div className="container mx-auto">
      <Link to="/" className="grid grid-cols-2 max-w-[136px] gap-y-[10px] items-center px-[35px] shadow-md rounded-[6px] mb-[80px] py-[10px]">
        <LeftArrow className="" />
        <button className="font-light">Back</button>
      </Link>

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div
          className="grid grid-cols-2 grid-rows-1 items-center gap-x-[120px]"
          key={index}
        >
          <img
            className="max-w-[460px] h-[331px] rounded-[8px]"
            src={country.flags.png}
            alt="Flag"
          />

          <div className="">
            <h3 className="font-bold text-lighterblack mb-6 text-[32px]">
              {country.name.common}
            </h3>

            <div className="grid grid-cols-2">
              <dl className="grid gap-y-[10px] items-baseline">
                <div className="flex">
                  <dt className="font-semibold text-lighterblack">
                    Native Name:
                  </dt>
                  <dd className="font-light ml-1 leading-6">
                    {country.name.nativeName.official}
                  </dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold text-lighterblack">
                    Population:
                  </dt>
                  <dd className="font-light ml-1 leading-6">
                    {country.population}
                  </dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold text-lighterblack">Region:</dt>
                  <dd className="font-light ml-1 leading-6">
                    {country.region}
                  </dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold text-lighterblack">
                    Sub Region:
                  </dt>
                  <dd className="font-light ml-1 leading-6">
                    {country.subregion}
                  </dd>
                </div>
                <div className="flex items-center">
                  <dt className="font-semibold text-lighterblack">Capital:</dt>
                  <dd className="font-light ml-1 leading-6">
                    {country.capital}
                  </dd>
                </div>
              </dl>
              <dl className="grid grid-rows-5 gap-y-[10px] items-baseline">
                <div className="flex">
                  <dt className="font-semibold text-lighterblack">
                    Top Level Domain:
                  </dt>
                  <dd className="font-light ml-1 leading-6">
                    { country.tld }
                  </dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-lighterblack">
                    Alternative:
                  </dt>
                  <dd className="font-light ml-1 leading-6">
                    {country.cioc}
                  </dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-lighterblack">
                    Languages:
                  </dt>
                  <dd className="font-light ml-1 leading-6">
                    {console.log(country.languages[0])}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInfo;
