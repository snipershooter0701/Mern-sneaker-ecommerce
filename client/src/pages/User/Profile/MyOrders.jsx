import React from "react";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const { orders } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="">
      <h3 className="text-xl leading-6 font-bold text-very-dark-blue">
        My Orders
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-dark-grayish-blue">
        Order history details
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />

      <div className="">
        {userInfo && orders.length > 0 ? (
          <>
            <h3 className="sr-only">
              Order placed on <time dateTime="2021-07-06">Jul 6, 2021</time>
            </h3>
            {orders.map((order, index) => (
              <>
                <div className="flex items-center p-4 border-b border-grayish-blue sm:p-6 w-full">
                  <dl
                    // className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
                    className="flex flex-col lg:flex-row justify-between w-full text-sm relative"
                  >
                    <div className="absolute bg-light-grayish-blue -inset-x-4 -top-10 -bottom-3"></div>
                    <div className="flex flex-col lg:flex-row relative">
                      <div className="lg:px-2 flex lg:flex-col flex-row justify-between py-1 lg:py-0 h-fit">
                        <dt className="font-medium text-very-dark-blue">
                          Order number
                        </dt>
                        <dd className="mt-1 text-dark-grayish-blue">
                          WU88191111
                        </dd>
                      </div>
                      <div className="lg:px-2 flex lg:flex-col flex-row justify-between py-1 lg:py-0 h-fit hidden sm:flex">
                        <dt className="font-medium text-very-dark-blue">
                          Date placed
                        </dt>
                        <dd className="mt-1 text-dark-grayish-blue">
                          <time dateTime="2021-07-06">Jul 6, 2021</time>
                        </dd>
                      </div>
                      <div className="lg:px-2 flex lg:flex-col flex-row justify-between py-1 lg:py-0 h-fit">
                        <dt className="font-medium text-very-dark-blue">
                          Total amount
                        </dt>
                        <dd className="mt-1 font-medium text-very-dark-blue">
                          $160.00
                        </dd>
                      </div>
                    </div>
                    <div className="flex lg:flex-col flex-row relative justify-between py-1 lg:py-0 h-fit">
                      <dt className="font-medium text-very-dark-blue">
                        Delivery Details
                      </dt>
                      <dd className="mt-1 font-medium text-very-dark-blue text-end lg:text-start text-xs">
                        <address className="not-italic text-very-dark-blue w-full">
                          <p className="fullname mb-2">Jane Doe</p>
                          <p className="location text-dark-grayish-blue">
                            10, red Tress estate, New York
                          </p>
                          <p className="city-state mb-2 text-dark-grayish-blue">
                            New City, New York
                          </p>
                          <p className="telephone text-dark-grayish-blue mb-3">
                            08066778899
                          </p>
                        </address>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="orders flex flex-col lg:-mx-3 mt-7">
                  {order.products.map((item, index) => (
                    <div className="">
                      <div>
                        <div
                          key={index}
                          className="w-full h-full rounded-md relative my-2 lg:mx-3 lg:my-3 flex "
                        >
                          <div className="flex flex-row">
                            <img
                              className="w-22 h-22 hover:opacity-80 object-cover"
                              src={item[0].product.img[0]}
                              alt="order-img"
                            />
                            <div className="flex flex-col">
                              <div className="flex flex-row text-sm lg:text-base">
                                <p className="ml-4 mr-2">
                                  {item[0].product.title}
                                </p>
                                X<p className="ml-2">{item[0].quantity}</p>
                              </div>
                              <div className="amount ml-4 mt-2 text-dark-grayish-blue">${item[0].itemTotal}</div>
                            </div>
                          </div>
                        </div>
                        <hr className="text-gray-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <p className="text-xl">No Orders yet.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
