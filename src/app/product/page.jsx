"use client"
import { useEffect, useState } from "react";
/* import Spinner from "../../Spinner"; */
import { productsCollection } from "@/utils/firebase";
import { getDocs } from "firebase/firestore";
import ProductHeader from "@/Components/Product/ProductHeader";
import Item from "@/Components/Product/Item";
import './Product.css'

const Product = () => {
  const [productsList, setProductsList] = useState([]);
  const [popUpContent, setPopUpContent] = useState([]);
  const [popUpTogle, setPopUpTogle] = useState(false);
  const [load, setLoad] = useState(false);

  const changeContent = (product) => {
    setPopUpContent([product]);
    setPopUpTogle(!popUpTogle);
   };

  useEffect(() => {
    const query = getDocs(productsCollection);

    query
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setProductsList(products);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="products-Container">
      {load ? (
        <div>
          <ProductHeader />
          <div className="cards-products">
            {productsList.map((product) => {
              return (
                <Item
                  product={product}
                  key={product.id}
                  popUpContent={popUpContent}
                  changeContent={changeContent}
                  popUpTogle={popUpTogle}
                />
              );
            })}
          </div>
        </div>  
      ) : (
        <div className="spinner">
          <h1>Looding...</h1>
    {/*       <Spinner /> */}
        </div>
      )}
    </div>
  );
};
export default Product;