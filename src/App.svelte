<script lang="ts">
  import Modal from "svelte-simple-modal";
  import { connected } from "svelte-web3";
  import ProviderModal from "./ProviderModal.svelte";
</script>

<main>
  <Modal show={$connected === true ? undefined : ProviderModal} />
  <h1>
    Hello {$connected === true ? "Connected" : "Not Connected"} to Ethereum!
  </h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
