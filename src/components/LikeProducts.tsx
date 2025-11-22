import { useSelector } from "react-redux";

import style from "../styles/products.module.css";
import Like from "./Like";
import type { RootState } from "../types";

const LikeProducts = () => {
  const { liked } = useSelector((state: RootState) => state.products);

  return (
    <div className={style.products}>
      {liked.map((product) => (
        <Like key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LikeProducts;
