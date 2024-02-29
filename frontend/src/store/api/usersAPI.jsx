import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: "createUsers",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/users",
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                query: (user) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: {
                            userId: user,
                        },
                    };
                },
            }),
            addUser: builder.mutation({
                query: (user) => {
                    return {
                        url: "/create-user",
                        method: "POST",
                        body: user,
                    };
                },
            }),
        };
    },
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
export { usersApi };
