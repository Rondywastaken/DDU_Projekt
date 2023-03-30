import { redirect } from "@sveltejs/kit";

export const actions = {
    signup: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {

            const createUser = await locals.pb.collection("users").create(data);
            console.log("user has been created", createUser)

            locals.pb.authStore.clear();
            throw redirect(303, '/signin');
            
        } catch (err) {
            console.error("password has to be 5 characters or more");
            throw err;
        }
    }
}