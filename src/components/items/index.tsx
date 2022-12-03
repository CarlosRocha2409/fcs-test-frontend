import "./index.styles.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../config/axios";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import { ICharacter } from "../../types/character.type";
import { toast } from "react-toastify";
import { ItemCard } from "./item-card";

export default function ItemsContainer() {
  const [searchParams] = useSearchParams();

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const navigate = useNavigate();

  function handleSearch() {
    const option: string = searchParams.get("option") as string;
    const search = searchParams.get("search");
    api
      .get("/items", {
        params: {
          [option]: search,
        },
      })
      .then(({ data }) => {
        setCharacters(data.slice(0, 4));
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        navigate("/");
      });
  }

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className="items">
      <img src={logo} alt="logo" />
      <div className="items-container">
        {characters.map((c) => (
          <ItemCard character={c} />
        ))}
      </div>
    </div>
  );
}
