'use client'
import styles from './search.module.css';
import { IoSearch } from 'react-icons/io5';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term: string) => {
    console.log(`Searching...${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('procuracoes', term);
    } else {
      params.delete('procuracoes');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.searchBar}>
      <input
        placeholder='Pesquisar'
        type="text"
        name="inputPesquisar"
        id="inputPesquisar"
        className={styles.input}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('procuracoes')?.toString()}
      />
      <IoSearch size={30} />
    </div>
  )
}

export default SearchBar