import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper';
import { PostType } from '../../pages/posts';

export const postsSlice = createApi({
	reducerPath: 'posts',
	baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
	// TODO 3 STEP
	extractRehydrationInfo(action, {reducerPath}) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	tagTypes: [],
	endpoints: builder => ({
		getPosts: builder.query<PostType[], void>({
			query: () => '/posts?_limit=5'
		})
	})
})

// Export hooks for usage in functional components
export const {useGetPostsQuery, util: {getRunningQueriesThunk}} = postsSlice

// export endpoints for use in SSR
// TODO 4 STEP
export const {getPosts} = postsSlice.endpoints;
