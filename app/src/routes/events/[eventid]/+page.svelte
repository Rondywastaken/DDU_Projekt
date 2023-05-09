<script lang="ts">
    import "./event.css"
    import { addedMail } from "$lib/store";

    console.log(addedMail)

</script>

<div class="window-container">
    <div class="app-container">
        <div class="event-container">
            <div class="countdown">
                countdown
            </div>

            <div class="activites">
                activites
            </div>
            <div class="leaderboard">
                leaderboard
                <table>
                    <tr>
                        <th>Users</th>
                        <th id="thright">Score</th>
                    </tr>
                </table>
            </div>    
        </div>
    </div>
</div>