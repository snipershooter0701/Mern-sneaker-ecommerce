import { useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/icon-menu.svg";
import avatar from "../../assets/image-avatar.png";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { cartDisplay, setTotals } from '../../redux/reducers/cartSlice'

const Header = () => {
  
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.cart.showCart)
  const total = useSelector((state) => state.cart.total)
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  
  useEffect(() => {
    dispatch(setTotals())
    // eslint-disable-next-line
  }, [cartItems])
  
  //HAMBURGER MENU
  let navMenu = useRef(null);
  let darkScreen = useRef(null);
  let close = useRef(null);
  let hamburger = useRef(null);

  const displayMenu = () => {
    navMenu.current.classList.toggle("!translate-x-0");
    darkScreen.current.classList.toggle("!opacity-60");
    darkScreen.current.classList.toggle("!z-20");
    close.current.classList.toggle("!block");
    hamburger.current.classList.toggle("!hidden");
  };


  return (
    <header className="sm:px-3 lg:px-0 mx-auto">
      <div className="wrapper max-w-xl lg:max-w-7xl relative flex h-16 px-5 py-4 items-center justify-between lg:h-28 mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1 lg:py-0 lg:border-b border-grayish-blue">
        <div className="left flex items-center lg:h-inherit">
          <div
            onClick={displayMenu}
            className="menu w-4 lg:hidden z-40 cursor-pointer"
          >
            <img ref={hamburger} src={menu} alt="menu-icon" />
            <div
              ref={close}
              className="close hidden text-xl leading-none fixed -mt-3 -ml-1 w-4"
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <NavLink to="/" className="logo mx-4 -mt-1 lg:m-auto lg:w-[138px] z-50">
            <img src={logo} alt="logo" />
          </NavLink>
          <nav
            ref={navMenu}
            className="menu fixed inset-0 right-1/3 bg-white pt-20 z-30 h-screen px-7 -translate-x-full transition-all ease-in-out duration-500 lg:translate-x-0 lg:relative lg:w-max lg:p-0 lg:h-inherit lg:flex lg:items-center"
          >
            <ul className="font-bold lg:font-normal text-center lg:text-left lg:flex lg:items-center text-lg lg:text-base pt-2 lg:p-0 lg:mx-9 lg:text-dark-grayish-blue lg:h-inherit">
              <li className="relative h-12 lg:h-inherit">
                <NavLink
                  to="/collections"
                  className={({ isActive }) =>
                    "absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-full before:-z-10 before:lg:z-10 before:lg:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all lg:hover:text-very-dark-blue " +
                    (!isActive ? "" : "before:w-full text-white lg:text-very-dark-blue")
                  }
                >
                  Collections
                </NavLink>
              </li>
              <li className="relative h-12 lg:h-inherit">
                <NavLink
                  to="/products/men"
                  className={({ isActive }) =>
                    "absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-full before:-z-10 before:lg:z-10 before:lg:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all lg:hover:text-very-dark-blue " +
                    (!isActive ? "" : "before:w-full text-white lg:text-very-dark-blue")
                  }
                >
                  Men
                </NavLink>
              </li>
              <li className="relative h-12 lg:h-inherit">
                <NavLink
                  to="/products/women"
                  className={({ isActive }) =>
                    "absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-full before:-z-10 before:lg:z-10 before:lg:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all lg:hover:text-very-dark-blue " +
                    (!isActive ? "" : "before:w-full text-white lg:text-very-dark-blue")
                  }
                >
                  Women
                </NavLink>
              </li>
              <li className="relative h-12 lg:h-inherit">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    "absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-full before:-z-10 before:lg:z-10 before:lg:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all lg:hover:text-very-dark-blue " +
                    (!isActive ? "" : "before:w-full text-white lg:text-very-dark-blue")
                  }
                  end
                >
                  All
                </NavLink>
              </li>
              <li className="relative h-12 lg:h-inherit">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-full before:-z-10 before:lg:z-10 before:lg:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all lg:hover:text-very-dark-blue " +
                    (!isActive ? "" : "before:w-full text-white lg:text-very-dark-blue")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="">
              <li>
                <NavLink to="/login">
                  <button className="h-10 w-full sm:hidden bg-orange px-4 rounded-lg lg:rounded-xl text-white flex items-center justify-center hover:bg-white shadow-[inset_0_0_0_0_rgba(255,125,26,0.6)] hover:shadow-[inset_0_-4rem_0_0_rgba(255,125,26,0.6)] transition-all duration-300">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div
            ref={darkScreen}
            className="screen -z-10 fixed inset-0 opacity-0 bg-black h-screen lg:hidden transition-all"
            onClick={displayMenu}
          ></div>
        </div>
        {showCart && <Cart />}
        <div className="right">
          <div className="user-bar flex items-center">
            <div className="cart-container">
              <div className="cart-wrapper mx-0 sm:mx-3 lg:mx-8 lg:mt-2 relative">
                {total > 0 && (
                  <div className="quantity-wrapper absolute px-2 rounded-full bg-orange z-10 -right-1/3 lg:-right-1/2 -top-2">
                    <div className="amount text-white text-xs">{total}</div>
                  </div>
                )}
                <i
                  onClick={()=>dispatch(cartDisplay(!showCart))}
                  className={
                    "cursor-pointer text-3xl !leading-none lg:text-2xl transition-colors " +
                    (showCart ? "text-very-dark-blue" : "text-grayish-blue")
                  }
                >
                  <ion-icon name="cart-outline"></ion-icon>
                </i>
              </div>
            </div>
            <div className="user h-6 w-6 mx-2 sm:h-8 sm:w-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hidden">
              <img src={avatar} alt="avatar" />
            </div>
            <NavLink to="/login">
              <button className="h-10 sm:block bg-orange px-4 rounded-lg lg:rounded-xl ml-2 text-white flex items-center justify-center hover:bg-white shadow-[inset_0_0_0_0_rgba(255,125,26,0.6)] hover:shadow-[inset_0_-4rem_0_0_rgba(255,125,26,0.6)] transition-all duration-300">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
