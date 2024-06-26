import {
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