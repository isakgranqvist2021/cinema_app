/** @format */

interface HttpConfig {
	method: string;
	headers: Headers;
	body: any;
}

export const serverAddr = 'http://localhost:8080';

const config = (method: string, payload?: string | FormData): HttpConfig => {
	return Object.assign(
		{},
		{
			method: method,
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token') || '',
			}),
			body: ['POST', 'PUT'].includes(method) ? payload : null,
		}
	);
};

export const POST = async (endp: string, payload: string | FormData) =>
	await fetch(serverAddr + endp, config('POST', payload)).then((res) =>
		res.json()
	);

export const GET = async (endp: string) =>
	await fetch(serverAddr + endp, config('GET')).then((res) => res.json());
