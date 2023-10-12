import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { apiKey } from "../firebase";
import { authUrl } from "../firebase";

export const authApi = createApi({
    reducePath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: 'POST',
                body: auth,
            })
        }),
        login: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
    }),
})
export const { useSignUpMutation, useLoginMutation } = authApi