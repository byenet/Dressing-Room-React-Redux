let initialState = {
    topClothes: '',
    botClothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: '',

}

const ModelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLOTH':{
            state[action.payload.type] = action.payload.img;
            // => state.topClothes = action.payload.img
            return {...state};
        }

        default: return state;
    }
}

export default ModelReducer;