import React, { useEffect } from "react";
import aboutHeader from "../assets/page-header/about-header.jpg";
import Filter from "../components/Filter";
import ProductItem from "../components/home/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import {
  getFilteredProducts,
  selectFilters,
} from "../redux/reducers/productSlice";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const errMsg = useSelector((state) => state.product.errMsg);
  const containFilters = useSelector((state) => state.product.containFilters);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);

  useEffect(() => {
    if (!loading) {
      // get filtered product choose return an empty array (bcos gender = men or women in products array)
      // so that selectedFilers fxn can run successfully from store
      dispatch(getFilteredProducts({ gender: "all" }));
      // dispatch(getProducts({ products }));
      dispatch(
        selectFilters({ filter: { ...filter, color: "", company: "" } })
      );
    }
    // eslint-disable-next-line
  }, [!loading]);

  return (
    <section className="h-auto pt-2 min-h-[80vh]">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        <h2 className="product capitalize text-white font-bold text-center relative z-10 lg:text-left text-3xl sm:text-4xl sm:leading-none pb-3 px-8">
          Products
        </h2>
        <div className="absolute top-0 left-0 bg-dark-grayish-blue w-full h-48 rounded-md overflow-hidden">
          <img
            src={aboutHeader}
            alt="rows of sneakers"
            className="opacity-10 absolute h-full w-full object-cover"
          />
        </div>
        <Filter />
        {!error ? (
          <>
            {loading ? (
              <Loading />
            ) : (
              <div className="product-container max-w-2xl mx-auto lg:max-w-7xl px-4 lg:px-0 my-20 lg:my-32">
                <div className="grid grid-cols-1 gap-y-12 sm:y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {products.map((product, index) => (
                    <ProductItem
                      key={product._id}
                      product={product}
                      containFilter={containFilters[index]}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <p className=" mt-20 text-center text-very-dark-blue">
              {errMsg}. Reload page
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
