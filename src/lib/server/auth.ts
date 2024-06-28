import { writable } from 'svelte/store';

const user = 'admin';
const pass = 'admin';

export const store = writable(0);

export const getUserDetails = async (username: string, password: string) => {
	if (username == user && password == pass) return 1;
};
