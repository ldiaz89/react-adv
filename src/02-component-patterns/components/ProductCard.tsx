import React, { createContext, Props, ReactElement, useContext } from "react";
import styles from "../style/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, ProductCardsProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product }: ProductCardsProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};


