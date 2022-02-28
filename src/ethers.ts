import { ethers } from "ethers";
import { signer } from "./stores";

export async function loadSigner(): Promise<void> {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(
    (window as any).ethereum,
    "any"
  );

  // MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const newSigner = provider.getSigner();
  signer.set(newSigner);
}
