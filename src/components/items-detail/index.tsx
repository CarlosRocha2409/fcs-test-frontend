import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../config/axios";
import { ICharacter } from "../../types/character.type";
import "./index.style.scss";

export function ItemsDetailContainer() {
  const { id } = useParams();
  const [character, setCharacter] = useState<ICharacter>();
  const navigate = useNavigate();
  function handleUserLoad() {
    api
      .get(`/items/${id}`)
      .then(({ data }) => {
        console.log(data);
        setCharacter(data);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        navigate("/");
      });
  }

  useEffect(() => {
    handleUserLoad();
  }, []);
  return (
    <div className="item-detail">
      <img src={character?.image} alt="pp" />
      <div className="item-info">
        <h1>{character?.name}</h1>
        <div className="item-info-content">
          <div className="item-trait">
            <h4>Gender</h4>
            <p>{character?.gender}</p>
          </div>
          <div className="item-trait">
            <h4>Origin</h4>
            <p>{character?.origin.name}</p>
          </div>
          <div className="item-trait">
            <h4>Last Known location</h4>
            <p>{character?.location.name}</p>
          </div>
          <div className="item-trait">
            <h4>Species</h4>
            <p>{character?.species}</p>
          </div>
          <div className="item-trait">
            <h4>Status</h4>
            <p>{character?.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
