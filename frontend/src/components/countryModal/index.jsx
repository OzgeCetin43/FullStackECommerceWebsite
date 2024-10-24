import { useEffect, useState } from "react";
import { Modal, Layout, Input, Button } from "antd";

import "./country-modal.css";

const { Content } = Layout;

export const CountryModal = ({
  children,
  setSelectedCountry,
  selectedCountry,
  ...rest
}) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries?.filter((country) =>
    country?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setSearchTerm("");
  }, [rest.open]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data?.map((country) => country?.name?.common));
  };

  return (
    <Modal {...rest} className="country-modal">
      {children}
      <Content className="country-modal-search-content">
        <Input
          className="country-modal-search-input"
          placeholder="Search your area"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </Content>
      <Content style={{ maxHeight: "400px", overflowY: "auto" }}>
        {filteredCountries?.map((country, index) => (
          <Button
            key={index}
            className={
              selectedCountry === country
                ? "country-list-item selected-country"
                : "country-list-item"
            }
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </Button>
        ))}
      </Content>
    </Modal>
  );
};
