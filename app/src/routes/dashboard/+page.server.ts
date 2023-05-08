import { redirect } from '@sveltejs/kit';

let eventData: any = []

export const load = async () => {
    return {
        eventData
    }
}

export const actions = { 
    logout: async ({ locals }) => {
        await locals.pb.authStore.clear();
        throw redirect(303, '/');
    },
    createEvent: async ({ request }) => { 
        const formData = await request.formData();

        const eventNavn = formData.get("eventNavn")
        const datostart = formData.get("datostart")
        const datoslut = formData.get("datoslut")

        const event = {
            eventNavn,
            datostart,
            datoslut
        }

        eventData.push(event)
    }
}
