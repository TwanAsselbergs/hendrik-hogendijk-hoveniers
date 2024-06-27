import { getUserDetails, store } from '$lib/server/auth'

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request, url }) => {
        const test = await request.formData();
        
        console.log(test)
    }
}