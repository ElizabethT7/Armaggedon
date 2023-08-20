import AsteroidsState from './types/AsteroidsState';

export function reducer(state, {type, payload}) {
  switch (type) {
    case 'SET_ASTEROIDS': 
      return {
        ...state,
        items: (Object.keys(payload) as Array<keyof typeof payload>).reduce((accumulator, current) => {
          accumulator.push(payload[current]);
          return accumulator;
        }, [] as (typeof payload[keyof typeof payload])[])[0] || [],
        loading: false,
      }
 
    /*case 'ADD_TO_BASKET': {
        const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);

        let newOrder = null;
        if (itemIndex < 0) {
          const newItem = {
            ...payload,
            quantity: 1,
          }
          newOrder = [...state.order, newItem];
        } else {
          newOrder = state.order.map((orderItem, index) => {
            if(index === itemIndex) {
              return {
                ...orderItem,
                quantity: orderItem.quantity + 1
              }
            } else {
              return orderItem;
            }
          });
        }
        return {
          ...state,
          order: newOrder,
          alertName: payload.name,
        };
      }
    case 'REMOVE_FROM_BASKET': 
      return {
        ...state,
        order: state.order.filter(el => el.id !== payload.id)
      }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      }

*/
    case 'TOGGLE_BASKET': 
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }
    case 'TOGGLE_DISTANCE': 
      return {
        ...state,
        isDistanceInKm: payload,
      }
    case 'ADD_ASTEROID': 
      return {
        ...state,
        asteroid: payload,
        loading: false,
      }
    default: 
      return state;
  }
}