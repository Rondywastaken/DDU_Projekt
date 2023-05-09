<script lang="ts">
    import "./event.css"
    import { userData } from "$lib/store";

    export let data;
    let users: { username: string, score: number}[];
    let score = 0;
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

</script>

<div class="window-container">
    <div class="app-container">
        <div class="event-container">
            <div class="countdown">
                countdown
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