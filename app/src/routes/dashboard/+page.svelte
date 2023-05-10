
<script lang="ts">
    import "./dashboard.css";
    import { navigateEventPage } from "$lib/utils";
    import Search from "../../lib/components/search.svelte";
    import { timeEndCountDown } from "$lib/store";
    
    export let data;
    export let timeDifference: number;

    data.eventData.forEach((element: { datostart: any; datoslut: any; }) => {
        const startDate = new Date(element.datostart)
        const endDate = new Date(element.datoslut)
        timeDifference = endDate.getTime() - startDate.getTime()
        timeEndCountDown.set(timeDifference)
    });

    let showPopup = false;
    let inputType = "text";
    
    const togglePopup = () => {
        if (showPopup == true) {
            showPopup = false;
        } else {
            showPopup = true;
        }
        
    }

    const changeType = () => {
        inputType = "date";
    }

</script>

<div class="window-container">
    <div class="app-container">

        <div class="dashboard-container">
            <div class="topsection">
                <h2>Velkommen {data.user.username}</h2>
                <i on:click={togglePopup} class="fa-solid fa-plus"></i>
            </div>

            {#each data.eventData as e}

            <div class="event-container">
                <div class="event">
                    <div>
                        <span>{e.datostart}</span>
                        <span>-</span>
                        <span>{e.datoslut}</span>
                    </div>
                    <span class="eventName">{e.eventNavn}</span>
                    <button on:click={navigateEventPage}><i class="fa-light fa-greater-than"></i>Åbn</button>
                </div>
            </div>
                
            {/each}

            {#if showPopup === true}
            <div class="popup-container">
                <div class="popup">
                    
                    <form action="?/createEvent" method="POST">
                        <div class="buttons">
                            <button on:click={togglePopup}>Annuller</button>
                            <h3 style="color:white;">Ny konkurrence</h3>
                            <button type="submit">Tilføj</button>
                        </div>
                        <div class="inputs">
                            <input type="text" name="eventNavn" placeholder="Titel" required>
                            <input type={inputType} on:focus={changeType} name="datostart" placeholder="Startdato" required>
                            <input type={inputType} on:focus={changeType} name="datoslut" placeholder="Slutdato" required>
                            <div>
                                <h2>Tilføj venner</h2>
                                <Search users={data.usernames}/>
                            </div>
                        </div>
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