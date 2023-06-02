import { GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next';
import { CSSProperties } from 'react';
import { getPosts, getRunningQueriesThunk, useGetPostsQuery } from '../../features/posts/posts.slice';
import { AppState, wrapper } from '../../store';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppSelector } from '../../hooks';

export type PostType = {
	id: number
	title: string
	body: string
	userId: number
}

// without redux
export const _getStaticProps: GetStaticProps<{ posts: PostType[] }> = async () => {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3').then(res => res.json());
	return {props: {posts}};
};

export const getStaticProps = wrapper.getStaticProps(store => async () => {
	// TODO 5 STEP
	store.dispatch(getPosts.initiate());

	await Promise.all(store.dispatch(getRunningQueriesThunk()));

	return {
		props: {}
	};

});

type Props = InferGetServerSidePropsType<typeof getStaticProps>

const PostsSsr: NextPage<Props> = () => {

	const {data: posts = []} = useGetPostsQuery()
	const value = useAppSelector((state: AppState) => state.counter.value)

	return (
		<div>
			<Link href={'/'}><h1>home</h1></Link>
			<h1>POSTS-SSR</h1>
			{posts.map((p) => {
				return (
					<div style={postsContainer} key={p.id}>
						<p>{p.body}</p>
					</div>
				)
			})}
			<h2>counter value: {value}</h2>

		</div>
	)
}
export default PostsSsr


// styles
const postsContainer: CSSProperties = {
	display: 'flex',
	border: '1px solid black',
	gap: '10px',
	margin: '10px',
	padding: '10px'
}
