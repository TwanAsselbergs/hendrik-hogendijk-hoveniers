import { readManyReviews } from '$lib/server/database';

export const load = async (index = 1) => {
	const dataR = await readManyReviews(3 * index, 3);
	const serializableDataR = dataR.map((item) => ({
		review: item.review,
		name: item.name
	}));

	return { reviews: serializableDataR };
};
