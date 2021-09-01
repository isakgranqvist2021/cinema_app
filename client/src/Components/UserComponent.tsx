/** @format */

import { gql, useQuery } from '@apollo/client';

export default function UserComponent(props: any): JSX.Element {
	const query = gql`
		query {
			user(id: ${props.id}) {
				id
				username
			}
		}
	`;

	const { loading, error, data } = useQuery(query);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<p>User ID: {data.user.id}</p>
			<p>Username: {data.user.username}</p>
		</div>
	);
}
