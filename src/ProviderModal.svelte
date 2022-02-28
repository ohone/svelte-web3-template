<script lang="ts">
  import { loadSigner } from "./ethers";
</script>

<h2>Connect to ethereum</h2>
<button on:click={loadSigner}>Metamask</button>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>
