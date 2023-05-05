import { redirect } from '@sveltejs/kit';

export const actions = { 
    logout: async ({ locals }) => {
        await locals.pb.authStore.clear();
        throw redirect(303, '/');
    },
    createEvent: async ({ request }) => { 
        const formData = await request.formData();
        const eventData = Object.fromEntries([...formData]);
        
        return {
            eventData
        }
    }
}
