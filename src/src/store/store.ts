import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { housesReducer } from './houses';
import { houseReducer } from './house';
import { mainReducer } from './main';
import { municipalitiesReducer } from './municipalities';
import { userReducer } from './user';

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const rootReducer = combineReducers({
    housesReducer,
    houseReducer,
    mainReducer,
    municipalitiesReducer,
    userReducer,
});

export const store = legacy_createStore(rootReducer, {}, bindMiddleware([thunkMiddleware]));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
