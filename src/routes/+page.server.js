import { readManyReviews } from '$lib/server/database';

export const load = async () => {
	const dataR = await readManyReviews(0, 2);
	const serializableDataR = dataR.map((item) => ({
		review: item.review,
		name: item.name
	}));

	return { props: serializableDataR };
};
