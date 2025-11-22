import { Link } from "react-router-dom";
import { addInLiked, removeProduct } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

import style from "../styles/product.module.css";
import type { ProductType, RootState } from "../types";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();

  const { liked } = useSelector((state: RootState) => state.products);

  const { id, category, images, title } = product;

  const setLiked = () => {
    dispatch(addInLiked(product));
  };

  return (
    <div className={style.product}>
      <Link to={`/${id}`}>
        <div className={style.title}>{title}</div>
        <div className={style.category}>{category.name}</div>
        <div className={style.img}>
          <img src={images[0]} alt="Images" />
        </div>
      </Link>
      <div className={style.buttons}>
        <button
          className={`${
            liked.some((item) => item.id === id) ? style.unlike : style.like
          }`}
          onClick={setLiked}
        >
          like
        </button>
        <button
          className={style.delete}
          onClick={() => dispatch(removeProduct(id))}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
