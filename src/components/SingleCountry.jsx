import React from "react";
import { Link } from "react-router-dom";

const SingleCountry = ({ country }) => {
  return (
    <Link to={country.name.common.toLowerCase()}>
      <li className="bg-blue-700 shadow-md m-0 rounded-[5px] h-full">
        <img
          className="w-full h-full h-[160px] rounded-tl-[5px] rounded-tr-[5px]"
          src={country.flags.png}
          alt={country.name.common}
          width="265"
          height="160"
        />

        <div className="px-6 pt-6 pb-[46px] max-w-[264px] w-full m-0">
          <h2 className="text-lighterblack font-bold text-lg mb-4">
            {country.name.common}
          </h2>
          <dl className="grid grid-cols-1 grid-rows-3 gap-y-2">
            <div className="flex">
              <dt className="text-sm font-semibold text-lighterblack mr-1">
                Population:
              </dt>
              <dd className="text-sm font-light text-lighterblack">
                {country.population}
              </dd>
            </div>
            <div className="flex">
              <dt className="text-sm font-semibold text-lighterblack mr-1">
                Region:
              </dt>
              <dd className="text-sm font-light text-lighterblack">
                {country.region}
              </dd>
            </div>
            <div className="flex">
              <dt className="text-sm font-semibold text-lighterblack mr-1">
                Capital:
              </dt>
              <dd className="text-sm font-light text-lighterblack">
                {country.capital}
              </dd>
            </div>
          </dl>
        </div>
      </li>
    </Link>
  );
};

export default SingleCountry;
