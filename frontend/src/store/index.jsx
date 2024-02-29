import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./api/usersAPI";
import { productsApi } from "./api/productsAPI";
import { authApi } from "./auth/authAPI";
import { ordersApi } from "./api/ordersAPI";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    cartReducer,
    addCart,
    updateQuantity,
    removeItem,
    addTotal,
    addAddress,
    clearState,
} from "./slice/cartSlice";

const cartPersistConfig = {
    key: "cart",
    storage,
};

const productsPersistConfig = {
    key: "products",
    storage,
};

const authsPersistConfig = {
    key: "auth",
    storage,
};

const usersPersistConfig = {
    key: "users",
    storage,
};

const ordersPersistConfig = {
    key: "orders",
    storage,
};

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);
const productsPersistedReducer = persistReducer(
    productsPersistConfig,
    productsApi.reducer
);
const authsPersistedReducer = persistReducer(
    authsPersistConfig,
    authApi.reducer
);
const usersPersistedReducer = persistReducer(
    usersPersistConfig,
    usersApi.reducer
);
const ordersPersistedReducer = persistReducer(
    ordersPersistConfig,
    ordersApi.reducer
);

export const store = configureStore({
    reducer: {
        // [usersApi.reducerPath]: usersApi.reducer,
        // [authApi.reducerPath]: authApi.reducer,
        // [productsApi.reducerPath]: productsApi.reducer,
        cart: cartPersistedReducer,
        [productsApi.reducerPath]: productsPersistedReducer,
        [usersApi.reducerPath]: usersPersistedReducer,
        [authApi.reducerPath]: authsPersistedReducer,
        [ordersApi.reducerPath]: ordersPersistedReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(usersApi.middleware)
            .concat(authApi.middleware)
            .concat(productsApi.middleware)
            .concat(ordersApi.middleware);
    },
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export {
    addCart,
    updateQuantity,
    removeItem,
    addTotal,
    addAddress,
    clearState,
};
export { useFetchUsersQuery, useAddUserMutation } from "./api/usersAPI";
export { useAuthenticateMutation, useVerifyQuery } from "./auth/authAPI";
export { useFetchProductsQuery } from "./api/productsAPI";
export {
    useFetchOrdersQuery,
    useFetchOrdersByIDQuery,
    useAddOrderMutation,
} from "./api/ordersAPI";
