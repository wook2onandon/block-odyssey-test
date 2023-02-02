import { configureStore } from '@reduxjs/toolkit';
import productReducer from './modules/product';
import queryParamsReducer from './modules/queryParams';

export default configureStore({
  reducer: {
    product: productReducer,
    queryParams: queryParamsReducer,
  },
});
