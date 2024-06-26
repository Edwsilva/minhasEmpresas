"use client";
import styles from "./search.module.css";
import { IoSearch } from "react-icons/io5";

type Props = {
  handleFilterTerm: (prop: string) => void;
  handleFilterType: (prop: string) => void;
};

const SearchBar = ({ handleFilterTerm, handleFilterType }: Props) => {
  return (
    <div className={styles.searchBar}>
      {/* <div> */}
      <input
        placeholder="Pesquisar"
        type="text"
        name="inputPesquisar"
        id="inputPesquisar"
        className={styles.input}
        onChange={(e) => {
          handleFilterTerm(e.target.value);
        }}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          handleFilterType(e.target.value);
        }}
      >
        <option value="Pendentes">Pendentes</option>
        <option value="Ativas">Ativas</option>
      </select>
      <IoSearch size={30} />
      {/* </div> */}
      {/* <div> */}
      {/* </div> */}
    </div>
  );
};

export default SearchBar;
