import Card from "../components/Card";

import styles from "../styles/ProductPage.module.css";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

import {filterProduct,searchProduct,setInitialQuery,} from "../helpers/helpers";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

function ProductPage() {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

 

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  

  useEffect(() => {
    setDisplayed(products);
    setQuery(setInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);

    setSearch(query.search || "");
    
    let finalProducts = searchProduct(products, query.search);
    finalProducts = filterProduct(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {displayed.length ? (
            displayed.map((p) => <Card key={p.id} data={p} />)
          ) : (
            <Loading />
          )}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductPage;
