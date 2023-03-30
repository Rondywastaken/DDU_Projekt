import { redirect } from "@sveltejs/kit";

export const actions = {
    signin: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        console.log(data)

        try {
            const authUser = await locals.pb.collection("users").authWithPassword(
                data.email.toString(), data.password.toString());
            console.log("user has been authenticated", authUser);
            
            throw redirect(303, '/dashboard');
        } catch (err) {
            console.log("Error:", err);
            throw err;
        } 
    }
}