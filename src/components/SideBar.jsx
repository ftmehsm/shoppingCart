import { setQueryUrl } from "../helpers/helpers";

import styles from "../styles/SideBar.module.css";
import { TbCategory } from "react-icons/tb";
import { categories } from "../constants/list";



function SideBar({query , setQuery}) {

    const categoryHandler = (e) => {
        const { tagName } = e.target;
        const category = e.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery(query => setQueryUrl(query ,{category}));
      };


    return (
        <div className={styles.sideBar}>
        <div className={styles.title}>
          <TbCategory />
          <h4>Categories</h4>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map(i => <li className={
            query.category == i.type.toLowerCase() ? styles.active : null
          } key={i.id}>{i.type}</li>)}
        </ul>
      </div>
    );
}

export default SideBar;