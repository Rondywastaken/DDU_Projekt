
export const actions = {
    signup: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])

        try {
            const createUser = await locals.pb.collection("users").create(data);

            

        }
        catch (err) {
            console.log(err)
        } 

    }
}