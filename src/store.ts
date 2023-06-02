import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './features/counter/counterSlice'
import { postsSlice } from './features/posts/posts.slice';
import { createWrapper } from 'next-redux-wrapper';

export function makeStore() {
	return configureStore({
		reducer: {
			counter: counterReducer,
			[postsSlice.reducerPath]: postsSlice.reducer
		},
		middleware: gDM => gDM().concat(postsSlice.middleware)
	})
}

const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>

export default store

// TODO 1 STEP
export const wrapper = createWrapper<AppStore>(makeStore, {debug: true});
