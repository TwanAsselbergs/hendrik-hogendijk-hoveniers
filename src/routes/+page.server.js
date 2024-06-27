import { json } from '@sveltejs/kit';
import { reverse } from 'dns';
import { readManyReviews,
	readGeneral,
	readReviews,
	readHendrik
 } from '$lib/server/database';

export const load = async (index = 1) => {
	const dataR = await readManyReviews(3 * index, 3);
	const data = await readGeneral();
	const dataH = await readHendrik();
	const serializableDataR = dataR.map((item) => ({
		review: item.review,
		name: item.name
	}));

	const serializableData = data.map((item) => item.text);
	const serializableDataH = dataH.map((item) => ({
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

	return { props: { reviews: serializableDataR, data: serializableData, dataH: serializableDataH } };
	// return { reviews: serializableDataR ,data:serializableData, dataH: serializableDataH};
};
