
<script lang="ts">
    import "./dashboard.css";
    import Event from "../../lib/components/event.svelte";
    
    export let eventData: any;
    console.log(eventData)

    export let data;
    let showPopup = false;
    let inputType = "text";

    const togglePopup = () => {
        showPopup = true;
    }

    const changeType = () => {
        inputType = "date";
    }

    let formattedEventData: any = null;
    $: formattedEventData = eventData ? JSON.stringify(eventData) : null;

</script>

<div class="window-container">
    <div class="app-container">

        <div class="dashboard-container">
            <h2>Velkommen {data.user.username}</h2>
            <h2>{formattedEventData}</h2>
            <i on:click={togglePopup} class="add-event-btn fa-solid fa-plus"></i>

            {#if showPopup === true}
            <div class="popup-container">
                <div class="popup">
                    <h3>Opret begivenhed</h3>
                    <form action="?/createEvent" method="POST">
                        <input type="text" name="eventNavn" placeholder="Navn på begivenhed" required>
                        <input type={inputType} on:focus={changeType} name="datostart" placeholder="Start dato" required>
                        <input type={inputType} on:focus={changeType} name="datoslut" placeholder="Slut dato" required>
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