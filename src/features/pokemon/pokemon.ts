import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonType, UserPostType, UserResponseType } from "./type";

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonByName: builder.query<PokemonType, string>({
      query: (name) => `pokemon/${name}`,
    }),

    signup: builder.mutation<UserResponseType, UserPostType>({
      query: body=>({
        url: 'user',
        method: 'POST',
        body,
      })
    })

  }),
  
});

export const {useLazyGetPokemonByNameQuery, useSignupMutation} = pokemonApi;