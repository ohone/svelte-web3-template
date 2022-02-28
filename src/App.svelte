<script lang="ts">
  import ProviderModal from "./ProviderModal.svelte";
  import Modal, { bind } from "svelte-simple-modal";
  import { writable } from "svelte/store";
  import { signer } from "./stores";
  export let name: string;

  const modal = writable(null);
  const showModal = () => modal.set(bind(ProviderModal));

  if ($signer === undefined) {
    showModal();
  }
</script>

<main>
  {#if name == ""}
    showPopup();
  {/if}
  <Modal show={$modal} />
  <h1>Hello {name}!</h1>
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
