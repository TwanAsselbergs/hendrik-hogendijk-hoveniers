import { readManyReviews,
	createReview
 } from '$lib/server/database';

export const load = async () => {
	let index = 1;

	const dataR = await readManyReviews(3 * index, 3);
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
		const createName= formData.get('name');
		const createContent = formData.get('review');
		console.log(createName);
		if (typeof createName === 'string' && createReview) {
			console.log(await createReview(createName, createContent));
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
