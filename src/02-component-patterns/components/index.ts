import { ProductCard as ProductCardHOC } from './ProductCard';
import {  ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitles';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
// export { ProductCard } from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitles';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})