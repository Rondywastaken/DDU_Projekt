<script lang="ts">
    export let eventData: any[];
</script>

<div class="event-container">
    
    {#each eventData as e}
        <h3>{e.eventNavn}</h3>
        <h3>{e.datostart}</h3>
        <h3>{e.datoslut}</h3>
    {/each}

</div>




