import "./index.styles.scss";
import { ICharacter } from "../../../types/character.type";
import { useNavigate } from "react-router-dom";

interface Iprops {
  character: ICharacter;
}

export function ItemCard({ character }: Iprops) {
  const navigate = useNavigate();
  function handleCharacterDetail() {
    navigate(`/items/${character.id}`);
  }
  return (
    <div className="item-card" onClick={handleCharacterDetail}>
      <img src={character.image} alt="character" />
      <div className="ic-content">
        <h3>{character.name}</h3>
        <section className="ic-traits">
          <div className="ic-trait">
            <h4>Gender</h4>
            <p>{character.gender}</p>
          </div>
          <div className="ic-trait">
            <h4>Status</h4>
            <p>{character.status}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
