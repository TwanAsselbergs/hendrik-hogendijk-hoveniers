import {
	updateGeneral,
	createReview,
	deleteReview,
	readGeneral,
	readReviews,
	readHendrik
} from '$lib/server/database';
import { type } from 'os';
import { json } from 'stream/consumers';
import { serialize } from 'v8';

import { store } from '$lib/server/auth';

import { get } from 'svelte/store';

export const load = async () => {
	const data = await readGeneral();
	const dataH = await readHendrik();
	const dataR = await readReviews();
	const serializableDataR = dataR.map((item) => ({
		id: item._id.toString(),
		review: item.review,
		name: item.name
	}));

	const serializableData = data.map((item) => ({
		id: item._id.toString(),
		name: item.name,
		text: item.text
	}));

	const serializableDataH = dataH.map((item) => ({
		id: item._id.toString(),
		Fname: item.name.fName,
		Lname: item.name.lName,
		Number: item.number,
		Email: item.email,
		City: item.address.city,
		Street: item.address.street,
		HNumber: item.address.hNumber,
		PostalCode: item.address.postalCode,
		Facebook: item.socials.facebook,
		Instagram: item.socials.instagram
	}));

	return {
		props: { data: serializableData, dataH: serializableDataH, dataR: serializableDataR },
		logged: get(store)
	};
};

/**@type {import('./$types').Actions}*/
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const updateId = formData.get('IDU');
		const updateText = formData.get('text');
		console.log(updateText);
		if (typeof updateId === 'string' && updateText) {
			console.log(await updateGeneral(updateId, updateText));
			return {
				status: 303, // HTTP status code for "See Other"
				headers: {
					// Redirect to the same page, or specify another URL for redirection
					Location: '/where-to-redirect-after-success'
				}
			};
		} else {
			console.error('does not work');
		}
	}
};
