import { useSelector } from "react-redux";

const shortenName = (title)=>{
   return title.split(" ").slice(0,3).join(" ")
}

const searchProduct = (products,search) =>{
   if (!search) return products;
   const searchedProducts = products.filter(p => p.title.toLowerCase().includes(search));
   return searchedProducts
}
const filterProduct = (products,category) =>{
   if (!category) return products;
   const filteredProducts = products.filter(p => p.category == category);
   return filteredProducts
}

const setQueryUrl = (currentQuery , newQuery) =>{
   if(newQuery.search == ""){
      const {search , ...rest} = currentQuery;
      return rest
   }
   if(newQuery.category == "all"){
      const {category , ...rest} = currentQuery;
      return rest
   }
   return{
      ...currentQuery , ...newQuery
   }
}

const setInitialQuery = (searchParams) =>{
   const query = {};
   const search = searchParams.get("search");
   const category = searchParams.get("category");
   if(search) query.search = search;
   if(category) query.category = category;
   return query
}



const sumPrice = (products) => {
   const total = products.reduce((total,product) => total+ product.price *product.quantity , 0).toFixed(2);
   return total
}

const sumQuantity = (products) => {
   const counts = products.reduce((counter,product) => counter+product.quantity , 0);
   return counts
}

const productQuantity = (state , id) => {
   const index = state.findIndex(item => item.id == id);
   if(index == -1){
      return 0;
   }else{
      return state[index].quantity;
   }
}

const productDetails = id => {
   const products = useSelector(state => state.products.products);
   const product =  products.find(item => item.id == id);
   return product
}
 

export  {shortenName,searchProduct,filterProduct ,setQueryUrl , setInitialQuery,sumPrice,sumQuantity , productQuantity ,productDetails };