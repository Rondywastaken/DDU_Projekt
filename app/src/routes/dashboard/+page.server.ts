import { redirect } from '@sveltejs/kit';

export const actions = { 
    logout: async ({ locals }) => {
        await locals.pb.authStore.clear();
        throw redirect(303, '/');
    }
}