
<script lang="ts">
    export let data;
</script>

<div class="window-container">
    <div class="app-container">
        <h2>Velkommen {data.user.username}</h2>
        <form action="?/logout" method="POST">
            <button>Log ud</button>
        </form>
    </div>
</div>  