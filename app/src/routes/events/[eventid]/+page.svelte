<script lang="ts">
    import "./event.css"
    import { userData, timeEndCountDown } from "$lib/store";
    import { tick } from "svelte";

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

    timeEndCountDown.subscribe((data => {
        countDownTime = data
    }))

    $: countDownTimeNow = `${days}d ${hours}h ${minutes}m ${seconds}s` 

    
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
        <div class="event-container">
            <div class="countdown">
                countdown
                <div>
                    {countDownTimeNow}
                    {#if countDownDone}
                        <p>Event is done!</p>
                    {/if}
                </div>
            </div>

            <div class="activites">
                activites
                <div>
                    {#if showTask1}
                        <div>task 1
                            <p>Go down and train</p>
                            <button on:click={() => completeTask1(data.user.username)}>Completed</button>
                        </div>
                    {/if}
                    {#if showTask2}
                        <div>task 2
                            <p>Go for a run</p>
                            <button on:click={() => completeTask2(data.user.username)}>Completed</button>
                        </div>
                    {/if}
                    {#if showTask1 == false && showTask2 == false}
                        <p>You have completed all task for today!</p>
                    {/if}
                </div>
            </div>
            <div class="leaderboard">
                leaderboard
                <table>
                    <tr>
                        <th>Users</th>
                        <th>Score</th>
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