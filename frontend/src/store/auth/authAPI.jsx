import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducersPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/authenticate",
    }),
    endpoints(builder) {
        return {
            authenticate: builder.mutation({
                query: (credentials) => {
                    return {
                        url: "/verify-user",
                        method: "POST",
                        body: credentials,
                    };
                },
            }),
            verify: builder.query({
                query: (token) => {
                    return {
                        url: "/verify",
                        method: "GET",
                        headers: {
                            Authorization: `${token}`,
                        },
                    };
                },
            }),
        };
    },
});

export const { useAuthenticateMutation, useVerifyQuery } = authApi;
export { authApi };
