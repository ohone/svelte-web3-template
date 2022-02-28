import type { ethers } from "ethers";
import { writable } from "svelte/store";

export const signer = writable<
  ethers.providers.JsonRpcSigner | undefined | null
>(undefined);
