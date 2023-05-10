<script lang="ts">
    export let form;

    let passwordType = "password"
    let passwordshowed = false;

    const showPassword = () => {
        if(passwordType == "password") {
            passwordType = "text"
            passwordshowed = true;
        } else {
            passwordType = "password"
            passwordshowed = false
        }
        
    }
</script>

<div class="window-container">
    <div class="app-container">

        

        <div class="sign-in-up-container">
            <img src="/logo.png" alt="logo.png" width="197.85" height="65">
            <h1>Log in</h1>
            <form action="?/signin" method="POST">
                <div class="login-container">
                    <input name="email" type="email" placeholder="Email">
                    <input name="password" type="{passwordType}" placeholder="Adgangskode">

                    {#if passwordshowed == false}
                    <i on:click={showPassword} class="fa-solid fa-eye-slash"></i>
                    {:else}
                    <i on:click={showPassword} class="fa-solid fa-eye"></i>
                    {/if}

                    {#if form?.errorTrue}
                        <span style="color:red">Forkert email eller adgangskode</span>
                    {/if}
                    <button type="submit">Log in</button>
                </div>
            </form>
            <p>Ny til FitFriend? <a href="/opretbruger">Lav en konto</a> </p>
        </div>
        
    </div>
</div>