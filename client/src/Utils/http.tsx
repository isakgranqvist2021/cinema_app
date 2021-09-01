/** @format */

interface HttpConfig {
	method: string;
	headers: Headers;
	body: any;
}

interface Payload {
	query: string;
	operationName: string;
	variables: any;
}

export const serverAddr = 'http://localhost:8080/graphql';

const config = (method: string, payload: Payload): HttpConfig => {
	return Object.assign(
		{},
		{
			method: method,
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(payload),
		}
	);
};

export const POST = async (payload: Payload) => {
	return await fetch(serverAddr, config('POST', payload)).then((res) =>
		res.json()
	);
};
