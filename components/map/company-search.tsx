"use client";
import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import { AccountClass } from "@/types/account";

export function CompanySearch({ value, onCompanySelect }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query: any) => {
    try {
      console.log(`➡️ CompanySearch API query: ${query}`);
      const response = await fetch(`/api/accounts?name=${query}`);
      const data = await response.json();
      console.log(`➡️ CompanySearch API response data: ${data}`);
      setSuggestions(data);
    } catch (error) {
      console.log(`❌ CompanySearch API error: ${error}`);
    }
  };

  // Debounce the fetchSuggestions function to avoid making too many requests while typing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetchSuggestions = useCallback(
    debounce(async (query: any) => {
      try {
        const response = await fetch(`/api/accounts?name=${query}`);
        const data = await response.json();
        const transformedData = data.Data.map((account: AccountClass) => ({
          AccountID: account.ID,
          Name: account.Name,
        }));
        setSuggestions(transformedData);
      } catch (error) {
        console.log(`❌ CompanySearch API error: ${error}`);
      }
    }, 300),
    []
  );

  useEffect(() => {
    if (searchTerm.length > 1) {
      debouncedFetchSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }

    return () => {
      debouncedFetchSuggestions.cancel();
    };
  }, [debouncedFetchSuggestions, searchTerm]);

  const handleSearchChange = (event: any) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onCompanySelect({ Name: inputValue });
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.Name);
    setSuggestions([]);
    onCompanySelect(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder="Search for a company"
      />
      {suggestions.length > 0 && (
        <ul className="bg-white">
          {suggestions.map((suggestion: any) => (
            <li
              className="cursor-pointer hover:bg-outer_space-600 hover:text-white"
              key={suggestion.AccountID}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.Name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
