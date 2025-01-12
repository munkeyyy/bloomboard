import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface User{
    name:string,
    email:string,
    password:string,
    id:number,

}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getuserByName: builder.query<User, string>({
      query: (name) => `user/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetuserByNameQuery } = userApi