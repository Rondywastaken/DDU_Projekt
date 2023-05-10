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
            <h1>Opret bruger</h1>
            <form action="?/signup" method="POST">
                <div class="login-container">
                    <input type="text" name="username" placeholder="Brugernavn">
                    <input type="email" name="email" placeholder="Email">
                    <input type="{passwordType}" name="password" placeholder="Adgangskode">
                    <input type="{passwordType}" name="passwordConfirm" placeholder="Gentag adgangskode">

                    {#if passwordshowed == false}
                    <i id="eye" on:click={showPassword} class="fa-solid fa-eye-slash"></i>
                    {:else}
                    <i id="eye" on:click={showPassword} class="fa-solid fa-eye"></i>
                    {/if}

                    {#if form?.errorTrue}
                        <span style="color:red">Koden skal mindst være 5 tegn!</span>
                    {/if}
                    <button type="submit">Tilmed nu</button>
                </div>
            </form>
            <p>Allerede medlem? <a href="/">Log ind</a></p>
        </div>
    </div>
</div>