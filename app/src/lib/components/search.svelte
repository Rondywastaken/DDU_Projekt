    <script lang="ts">
        import { userData } from "$lib/store";

        export let users: string[] | undefined = [];
        let searchterm = "";
        export let currentAddedMail: string[] = []

        const addUser = (user: string) => {
            
            if ( currentAddedMail.includes(user) ) {
                const index = currentAddedMail.indexOf(user)
                currentAddedMail.splice(index, 1)
            } else {    
                currentAddedMail.push(user);
            }
            userData.set(currentAddedMail)

        }

    </script>

    <input bind:value={searchterm} placeholder="Søg">

    {#if searchterm != "" && users}
    <div>
        <table>
            <tbody>
                {#each users as user }
                    {#if user.includes(searchterm)}
                        <tr>
                            <input type="checkbox" placeholder="hello" on:click={() => addUser(user)}>
                            {user}
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
    {/if}