'use client';
import { FC, createContext, useReducer } from 'react';
import { reducer } from './reducer';
import IAsteroid from './types/IAsteroid';

interface AsteroidsState {
  items: IAsteroid[];
  loading: boolean;
  order: IAsteroid[];
  quantity: number;
  isBasketShow: boolean;
  isDistanceInKm: boolean;
  asteroid: IAsteroid | {};
}
const initialState: AsteroidsState = {
  items: [],
  loading: true,
  order: [],
  quantity: 0,
  isBasketShow: false,
  isDistanceInKm: true,
  asteroid: {},
}

//type IAsteroidsContext = [AsteroidsState, React.Dispatch<React.SetStateAction<AsteroidsState>>];
export const AsteroidsContext = createContext<any>([initialState, () => null]);


export const ContextProvider = ({ children }: any) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (data: IAsteroid) => {
    dispatch({type: 'ADD_TO_BASKET', payload: data})
  }
  value.handleDistance = (data: boolean) => {
    dispatch({type: 'TOGGLE_DISTANCE', payload: data})
  }
  value.setAsteroid = (data: IAsteroid) => {
    dispatch({type: 'ADD_ASTEROID', payload: data})
  }
  value.setItems = (data: any) => {
    dispatch({type: 'SET_ASTEROIDS', payload: data})
  }
  value.setOrder = (data: IAsteroid[]) => {
    dispatch({type: 'SET_ASTEROIDS', payload: data})
  }
  value.resetQuantity = () => {
    dispatch({type: 'RESET_QUANTITY', payload: null})
  }

  return (
    <AsteroidsContext.Provider  value={value}>
      {children}
    </AsteroidsContext.Provider>
  )

}