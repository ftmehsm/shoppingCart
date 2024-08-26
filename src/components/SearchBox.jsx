import styles from "../styles/Search.module.css";

import { setQueryUrl } from "../helpers/helpers";

function SearchBox({search,setQuery,setSearch}) {

    const SearchHanlder = () => {
        setQuery(query => setQueryUrl(query ,{search}))
      };

    return (
        <div className={styles.search}>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={SearchHanlder}>search</button>
      </div>
    );
}

export default SearchBox;