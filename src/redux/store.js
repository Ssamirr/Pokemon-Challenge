import {configureStore} from '@reduxjs/toolkit';
import  pokemonsSLice  from './pokemonsSlice';

export const store = configureStore({
    reducer: {
        characters:pokemonsSLice
    },
})