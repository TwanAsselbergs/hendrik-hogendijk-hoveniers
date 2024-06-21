import { readReview } from '$lib/server/database';

export const load = async () => {
	const dataR = await readReview();
	const serializableDataR = dataR.map((item) => ({
		review: item.review,
		name: item.name
	}));

	// console.log(serializableDataR);

	return { props: serializableDataR };
};
