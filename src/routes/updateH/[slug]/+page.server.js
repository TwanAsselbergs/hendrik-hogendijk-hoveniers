import {
    updateHendrik,
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

	return { props: { data: serializableData, dataH: serializableDataH, dataR: serializableDataR } };
};

/**@type {import('./$types').Actions}*/
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const updateId = formData.get('IDU');
		const updateFname = formData.get('Fname');
        const updateLname = formData.get('Lname');
        const updateNumber = formData.get('Number');
        const updateEmail = formData.get('Email');
        const updateCity = formData.get('City');
        const updateStreet = formData.get('Street');
        const updateHNumber = formData.get('HNumber');
        const updatePostalCode = formData.get('PostalCode');
        const updateFacebook = formData.get('Facebook');
        const updateInstagram = formData.get('Instagram');
		
		if (typeof updateId === 'string' && updateFname) {
			console.log(await updateHendrik(updateId,updateFname,updateLname,
                updateNumber,updateEmail,updateCity,updateStreet,updateHNumber,updatePostalCode,
                updateFacebook,updateInstagram));
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
