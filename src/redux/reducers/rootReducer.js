import {combineReducers} from 'redux';
import ProductReducer from './product';
import CategoryReducer from './category';
import ChoosenCategoryReducer from './choosenCategory';
import ModelReducer from './model';


export const rootReducer = combineReducers({
    // danh sach state luu tru tren store
    products: ProductReducer,
    categories: CategoryReducer,
    choosenCategory: ChoosenCategoryReducer,
    model: ModelReducer
})


