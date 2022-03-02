<script lang="ts">
  import { defaultEvmStores } from "svelte-web3";
  let title: string | undefined = "Connect to Ethereum";
</script>

<h2>{title}</h2>
<button on:click={() => defaultEvmStores.setProvider()}>Connect</button>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>
