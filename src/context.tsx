'use client';
import { FC, createContext, useReducer } from 'react';
import { reducer } from './reducer';
import IAsteroid from './types/IAsteroid';

interface AsteroidsState {
  items: IAsteroid[];
  loading: boolean;
  isBasketShow: boolean;
  isDistanceInKm: boolean;
  asteroid: IAsteroid | {};
}
const initialState: AsteroidsState = {
  items: [],
  loading: true,
  //order: [],
  isBasketShow: false,
  isDistanceInKm: true,
  asteroid: {},
}

type IAsteroidsContext = [AsteroidsState, React.Dispatch<React.SetStateAction<AsteroidsState>>];
export const AsteroidsContext = createContext<IAsteroidsContext>([initialState, () => null]);


export const ContextProvider = ({ children }: any) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  /*value.addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item})
  }

  value.removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  }*/

  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET', payload: null})
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

  return (
    <AsteroidsContext.Provider  value={value}>
      {children}
    </AsteroidsContext.Provider>
  )

}