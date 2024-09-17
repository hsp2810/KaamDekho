import { cn } from "@/lib/utils";
import React, { useState, useMemo } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";
import { buttonVariants } from "../ui/button";

type CountryOption = {
  label: string;
  value: string;
};

export default function CountrySelector() {
  const [value, setValue] = useState<SingleValue<CountryOption>>(null);
  const options = useMemo(() => countryList().getData() as CountryOption[], []);

  const changeHandler = (selectedOption: SingleValue<CountryOption>) => {
    setValue(selectedOption);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}
