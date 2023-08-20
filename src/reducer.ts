export function reducer(state: any,{type, payload}: any) {
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
    case 'SET_NEW_ASTEROIDS': {
      let newItems = (Object.keys(payload) as Array<keyof typeof payload>).reduce((accumulator, current) => {
          accumulator.push(payload[current]);
          return accumulator;
        }, [] as (typeof payload[keyof typeof payload])[])[0];
      return {
        ...state,
        items: state.items.concat(newItems),
        loading: false,
      }
    }   
    case 'SET_ORDER': 
      return {
        ...state,
        order: payload,
        loading: false,
      }
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((orderItem: { id: string; }) => orderItem.id === payload.id);
      let newOrder = null;

        if (itemIndex < 0) {
          newOrder = [...state.order, payload];
          return {
            ...state,
            order: newOrder,
            quantity: state.quantity + 1,
          }
        } else {
          return state;
        }
      }
    case 'RESET_QUANTITY':
      return {
        ...state,
        quantity: 0
      }
    case 'TOGGLE_BASKET': 
      return {
        ...state,
        isBasketShow: payload,
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