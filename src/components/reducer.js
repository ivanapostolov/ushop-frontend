export const initialState = {
    basket: [],
    user: null,
    baseUrl: "http://localhost:8000/"
};

const reducer = (state, action) => {
    console.log(action.user);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
            break;
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]

            const index = state.basket.findIndex(basketItem => (
                basketItem.id === action.id
            ))

            if (index >= 0) {
                newBasket.splice(index, 1)
            }

            return {...state, basket: newBasket }
            break;
        default:
            return state;
    }
}

export default reducer;