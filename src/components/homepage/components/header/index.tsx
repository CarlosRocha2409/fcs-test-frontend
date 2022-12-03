import headerpic from "../../../../assets/header.webp";
import SearchBar from "../../../forms/search-bar";
import "./index.styles.scss";

export default function HompePageHeader() {
  return (
    <div className="hp-header">
      <img src={headerpic} alt="header" />
      <SearchBar />
    </div>
  );
}
