import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiStore = createApi({
    reducerPath: 'apiStore',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints:(builder)=>({
        getRestaurantById:builder.query({
            query: (id)=>`restaurantes/${id}`,
        }),
        getAllRestaurants:builder.query({
            query:()=>'restaurantes'
        }),
        purchase: builder.mutation({
            query:(body)=>({
                url: 'checkout',
                method: 'POST',
                body,
            })

            // transformResponse: (response, meta, arg)=>response.data,
            // transformErrorResponse: (response, meta, args)=> response.status,
        })
    })
})

export const { useGetRestaurantByIdQuery, useGetAllRestaurantsQuery, usePurchaseMutation } = apiStore;