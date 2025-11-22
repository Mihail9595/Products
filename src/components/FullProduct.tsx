import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../types";

import style from "../styles/fullproduct.module.css";





const FullProduct: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const product = useSelector((state: RootState) =>
    state.products.products.find((item) => item.id === Number(id))
  );

  const goBack = () => navigate(-1);

  return !product ? (
    <section className="preloader">Loading...</section>
  ) : (
    <div>
      <div className={style.product}>
        <h1 className={style.title}>{product.title}</h1>
        <h2 className={style.price}>price {product.price}$</h2>
        <p className={style.description}>{product.description}$</p>
        <div className={style.img}>
          {product.images.map((img) => (
            <img key={img} src={img} alt="Images" />
          ))}
        </div>
        <div className={style.buttons}>
          <button onClick={goBack}>Return</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FullProduct;
