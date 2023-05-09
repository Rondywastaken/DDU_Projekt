
<script lang="ts">
    export let form;
</script>

<div class="window-container">
    <div class="app-container">
        <h1>Sign in</h1>
        <form action="?/signin" method="POST">
            <div class="login-container">
                <input name="email" type="email" placeholder="Email">
                <input name="password" type="password" placeholder="Password">
                {#if form?.errorTrue}
                    <span>Wrong password or email</span>
                {/if}
                <button type="submit">Sign in</button>
            </div>
        </form>

    </div>
</div>