import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ordersApi = createApi({
    reducerPath: "createOrders",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/orders",
    }),
    endpoints(builder) {
        return {
            fetchOrders: builder.query({
                query: (order) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: {
                            orderId: order,
                        },
                    };
                },
            }),
            fetchOrdersByID: builder.query({
                query: (order) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: {
                            orderId: order,
                        },
                    };
                },
            }),
            addOrder: builder.mutation({
                query: (user) => {
                    return {
                        url: "/create-orders",
                        method: "POST",
                        body: user,
                    };
                },
            }),
        };
    },
});

export const {
    useFetchOrdersQuery,
    useFetchOrdersByIDQuery,
    useAddOrderMutation,
} = ordersApi;
export { ordersApi };
