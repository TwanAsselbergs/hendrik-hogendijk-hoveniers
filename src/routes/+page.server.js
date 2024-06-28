import { readManyReviews, createReview } from '$lib/server/database';

export const load = async () => {
	const dataR = await readManyReviews(0, 10000);
	const serializableDataR = dataR.map((item) => ({
		review: item.review,
		name: item.name
	}));

	return { reviews: serializableDataR };
};

/**@type {import('./$types').Actions}*/
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const createName = formData.get('name');
		const createContent = formData.get('review');
		console.log(createName);
		if (typeof createName === 'string' && typeof createContent === 'string') {
			console.log(await createReview(createName, createContent));
			return {
				status: 303,
				headers: {
					Location: '/where-to-redirect-after-success'
				}
			};
		} else {
			console.error('Review creation failed due to invalid input');
		}
	}
};
