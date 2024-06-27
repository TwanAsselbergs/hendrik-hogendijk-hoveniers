import { getUserDetails, store } from '$lib/server/auth';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request, url }) => {
		const formData = await request.formData();
		const data = {};

		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		const user = await getUserDetails(data.username, data.password);

		if (user) {
			console.log(user);
			store.set(user);

			return { success: true };
		} else {
			return { failed: true, message: 'Gebruikersnaam of wachtwoord is onjuist.' };
		}
	}
};
