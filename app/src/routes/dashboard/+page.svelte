
<script lang="ts">
    import "./dashboard.css";

    export let data;
</script>

<div class="window-container">
    <div class="app-container">

        <div class="dashboard-container">
            <h2>Velkommen {data.user.username}</h2>
            <form action="?/logout" method="POST">
                <button>Log ud</button>
            </form>
        </div>
        
    </div>
</div>  