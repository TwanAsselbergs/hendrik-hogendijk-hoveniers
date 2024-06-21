import {
	createReview,
	deleteReview,
	readGeneral,
	readReview,
	readHendrik
} from '$lib/server/database';
import { serialize } from 'v8';

export const load = async () => {
	const data = await readGeneral();
	const dataH = await readHendrik();
    const dataR = await readReview();
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
  
	return { props: { data: serializableData, dataH: serializableDataH, dataR: serializableDataR } };
};

// load()
// 	.then((result) => {
// 		console.log(JSON.stringify(result,null,2));
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// async function logResultH() {
//     const resultH = await readHendrik();
//     console.log(resultH);
// }

// logResultH();
