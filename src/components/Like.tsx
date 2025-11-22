import { Link } from "react-router-dom";
import { removeProduct } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import type { ProductType } from "../types";

import style from "../styles/product.module.css";

const Like = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();

  const { id, category, images, title } = product;

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
          className={style.delete}
          onClick={() => dispatch(removeProduct(id))}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Like;
