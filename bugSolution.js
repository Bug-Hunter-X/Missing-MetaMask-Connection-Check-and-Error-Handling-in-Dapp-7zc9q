async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('MetaMask is not installed. Please install MetaMask to continue.');
    return false;
  }

  const accounts = await ethereum.request({ method: 'eth_accounts' });

  if (accounts.length > 0) {
    const account = accounts[0];
    console.log('Wallet is connected: ' + account);
    return account; // return connected account
  } else {
    console.log('Please connect to MetaMask.');
    return false;
  }
}

