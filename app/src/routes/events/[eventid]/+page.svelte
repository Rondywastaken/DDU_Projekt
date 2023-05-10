<script lang="ts">
    import "./event.css"
    import { userData, timeEndCountDown } from "$lib/store";
    import { tick } from "svelte";
  import { goto } from "$app/navigation";

    export let data;
    let users: { username: string, score: number}[];
    let showTask1 = true;
    let showTask2 = true;

    userData.subscribe((data => {
        users = data.map(username => ({username, score: 0}));
    }))

    const completeTask1 = (username: string) => {
        const userIndex = users.findIndex(user => user.username === username)
        users[userIndex].score++
        showTask1 = false
    }
    
    const completeTask2 = (username: string) => {
        const userIndex = users.findIndex(user => user.username === username)
        users[userIndex].score++
        showTask2 = false
    }

    let countDownTime: number;
    let days: number;
    let hours: number;
    let minutes: number;
    let seconds: number;
    let countDownDone = false;

    const goBack = () => {
        goto("/dashboard")
    }

    timeEndCountDown.subscribe((data => {
        countDownTime = data
    }))

    $: countDownTimeNow = `${days} dage, ${hours} timer, ${minutes} minutter, ${seconds} sekunder tilbage` 

    
    const interval = setInterval(() => {
        countDownTime -= 1000;
        countdown();
    }, 1000);
    

    const countdown = () => {

        days = Math.floor(countDownTime / (1000*60*60*24))
        hours = Math.floor((countDownTime % (1000*60*60*24)) / (1000*60*60))
        minutes = Math.floor((countDownTime % (1000*60*60)) / (1000*60))
        seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);

        if (countDownTime < 0) {
            clearInterval(interval)
            countDownDone = true;
        }

    }

    


</script>

<div class="window-container">
    <div class="app-container">
        <div class="events-container">
            <div class="events">
                <div class="toppart">
                    <button on:click={goBack}>Tilbage</button>
                    <h2>Konkurrence</h2>
                </div>

            <div class="countdown">
                <div>
                    <p>{countDownTimeNow}</p> 
                    {#if countDownDone}
                        <p>Event is done!</p>
                    {/if}
                </div>
            </div>

            <div class="activites">
                <div>
                    {#if showTask1}
                        <div class="task1">Opgave 1
                            <p style="font-size: 17px;">Gå ned og træn</p>
                            <button style="border-radius: 0.9rem; padding: 10px; width: 20%; border: none; background-color:#D5D5D5;" on:click={() => completeTask1(data.user.username)}>Gjort</button>
                        </div>
                    {/if}
                    {#if showTask2}
                        <div class="task1">Opgave 2
                            <p style="font-size: 17px;">Løb en tur</p>
                            <button style=" border-radius: 0.9rem; padding: 10px; width: 20%; border: none; background-color: #D5D5D5;" on:click={() => completeTask2(data.user.username)}>Gjort</button>
                        </div>
                    {/if}
                    {#if showTask1 == false && showTask2 == false}
                        <p style="font-size: 20px; color: white;">Du har klaret alle opgaver for i dag!</p>
                    {/if}
                </div>
            </div>
            <div class="leaderboard-container">
            <div class="leaderboard">
                Leaderboard
                <table>
                    <tr>
                        <th>Users</th>
                        <th>Point</th>
                    </tr>
                {#each users as u }
                    <tr>
                        <td>{u.username}</td>
                        <td>{u.score}</td>
                    </tr>  
                {/each}
                </table>
            </div>  
        </div>
        </div>  
        </div>
    </div>
</div>