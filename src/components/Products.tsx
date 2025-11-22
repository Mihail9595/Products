import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, setCurrentPage } from "../redux/productSlice";

import style from "../styles/products.module.css";
import type { ProductType, RootState } from "../types";
import type { AppDispatch } from "../redux/store";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, currentPage } = useSelector(
    (state: RootState) => state.products
  );

  const pageSize = 3;

  const totalPages = Math.ceil(products.length / pageSize);

  const currenProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNext = () => {
    if (currentPage < totalPages) dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrev = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  };

  const handlePageClick = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    if (!products.length) {
      dispatch(
        getProducts(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
        )
      );
    }
  }, [dispatch, products.length]);

  return (
    <>
      {isLoading ? (
        <div className="mt-20">Загрузка...</div>
      ) : (
        <div>
          <div className={style.products}>
            {currenProducts.map((product: ProductType) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="flex flex-row justify-center flex-wrap gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              style={{
                backgroundColor: currentPage !== 1 ? "#8b57c6" : "#b8b8b8",
              }}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                style={{
                  fontWeight: currentPage === page ? "bold" : "normal",
                  backgroundColor: currentPage === page ? "#8b57c6" : "#b8b8b8",
                }}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              style={{
                backgroundColor:
                  currentPage !== totalPages ? "#8b57c6" : "#b8b8b8",
              }}
            >
              &gt;
            </button>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default Products;
