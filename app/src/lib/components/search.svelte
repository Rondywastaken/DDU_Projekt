    <script lang="ts">
        import { addedMail } from "$lib/store";
        import { get } from "svelte/store";

        export let users: string[] | undefined;
        let searchterm = "";

        const addUser = (user: string) => {
            let currentAddedMail: string[] = get(addedMail)
            if ( currentAddedMail.includes(user) ) {
                const index = currentAddedMail.indexOf(user)
                currentAddedMail.splice(index, 1)
            } else {    
                currentAddedMail.push(user);
            }
            addedMail.set(currentAddedMail)
        }
    </script>

    <input bind:value={searchterm} placeholder="Add friend">

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