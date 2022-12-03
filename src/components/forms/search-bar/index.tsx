import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RickButton from "../button";
import "./index.styles.scss";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const [option, setOption] = useState<string>("name");
  const navigate = useNavigate();

  function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSelectInput(e: React.ChangeEvent<HTMLSelectElement>) {
    setOption(e.target.value);
  }

  function handleSearch() {
    const params = new URLSearchParams({
      option,
      search,
    });
    navigate(`/items?${params}`);
  }

  return (
    <div className="sb">
      <div className="sb-form">
        <select value={option} onChange={handleSelectInput}>
          <option value={"name"}>Name</option>
          <option value={"status"}>Satus</option>
          <option value={"gender"}>Gender</option>
          <option value={"species"}>Species</option>
          <option value={"type"}>type</option>
        </select>
        <input type="text" value={search} onChange={handleTextInput} />
      </div>
      <div className="sb-button-container">
        <RickButton onClick={handleSearch}>Search</RickButton>
      </div>
    </div>
  );
}
