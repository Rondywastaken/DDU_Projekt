
<script lang="ts">
    import "./dashboard.css";
    import { navigateEventPage } from "$lib/utils";
    import Search from "../../lib/components/search.svelte";

    export let data;

    let showPopup = false;
    let inputType = "text";

    const togglePopup = () => {
        showPopup = true;
    }

    const changeType = () => {
        inputType = "date";
    }

</script>

<div class="window-container">
    <div class="app-container">

        <div class="dashboard-container">
            <h2>Velkommen {data.user.username}</h2>
            <i on:click={togglePopup} class="add-event-btn fa-solid fa-plus"></i>

            {#each data.eventData as e}

                <div>
                    <span>{e.eventNavn}</span>
                    <span>{e.datostart}</span>
                    <span>{e.datoslut}</span>
                    <button on:click={navigateEventPage}>åbn</button>
                </div>
                
            {/each}

            {#if showPopup === true}
            <div class="popup-container">
                <div class="popup">
                    <h3>Opret begivenhed</h3>
                    <form action="?/createEvent" method="POST">
                        <input type="text" name="eventNavn" placeholder="Navn på begivenhed" required>
                        <input type={inputType} on:focus={changeType} name="datostart" placeholder="Start dato" required>
                        <input type={inputType} on:focus={changeType} name="datoslut" placeholder="Slut dato" required>
                        <Search users={data.usernames}/>
                        <button type="submit">Opret</button>
                    </form>
                </div>
            </div>
            {/if}
            <form action="?/logout" method="POST">
                <button>Log ud</button>
            </form>
        </div>
    </div>
</div>  