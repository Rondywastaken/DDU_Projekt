<script lang="ts">
    export let form;
</script>

<div class="window-container">
    <div class="app-container">
        <h1>Sign up</h1>
        <form action="?/signup" method="POST">
            <div class="login-container">
                <input type="text" name="username" placeholder="Brugernavn">
                <input type="email" name="email" placeholder="email">
                <input type="password" name="password" placeholder="adgangskode">
                <input type="password" name="passwordConfirm" placeholder="bekræft adgangskode">
                {#if form?.errorTrue}
                    <span>The password has to be at least 5 characters! or invalid email</span>
                {/if}
                <button type="submit">Sign up</button>
            </div>
        </form>
    </div>
</div>