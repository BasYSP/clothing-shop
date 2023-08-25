import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import data from "../data/Data";
import reducer from "./reducer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
// const initState = {
//   cart: data,
//   total: 0,
//   amount: 0,
// };

// const CartContext = createContext();

// export const MyCartContext = () => {
//   return useContext(CartContext);
// };

// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initState);
//   return (
//     <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
//   );
// };

// export { CartContext, CartProvider };

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [user, setUser] = useState({});
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [listItems, setListItems] = useState([]);

  const [checkCart, setCheckCart] = useState(false);
  const [checkListItem, setCheckListItem] = useState(false);
  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    setCheckCart(true);
  };
  const removeToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };
  const clearCart = () => {
    setCartItems(getDefaultCart());
    setCheckCart(false);
  };

  const addToList = (itemID) => {
    if (listItems.includes(itemID)) {
    } else {
      setListItems((prev) => [...prev, itemID]);
    }
  };
  const removeToList = (id) => {
    setListItems(listItems.filter((listItems) => listItems !== id));
  };
  function handleCheckListItem() {
    if (listItems.length > 0) {
      setCheckListItem(true);
    } else {
      setCheckListItem(false);
    }
    console.log(checkListItem);
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    clearCart,
    checkCart,
    listItems,
    addToList,
    removeToList,
    handleCheckListItem,
    checkListItem,
    user,
    logIn,
    signUp,
    logOut,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
