import { readManyReviews } from '$lib/server/database';

export const load = async () => {
    let index = 1

	const dataR = await readManyReviews(3*index, 3);
	const serializableDataR = dataR.map((item) => ({
		review: item.review,
		name: item.name
	}));
    
	// console.log(serializableDataR);

	return { reviews: serializableDataR };
};
