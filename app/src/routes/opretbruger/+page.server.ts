import { fail, redirect } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";

export const actions = {
    signup: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {

            const createUser = await locals.pb.collection("users").create(data);
            console.log("user has been created", createUser)

            locals.pb.authStore.clear();
            
            
        } catch (err) {
            if (err instanceof ClientResponseError) {
                const errorTrue = true;
                return fail(400, {errorTrue})
            }
        }
        throw redirect(303, '/');
    }
}