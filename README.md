# Missing MetaMask Connection Check and Error Handling

This repository demonstrates a common error in DApps: insufficient error handling when checking for MetaMask wallet connectivity.

The `bug.js` file contains code that assumes the user has MetaMask installed and connected.  The improved version in `bugSolution.js` addresses this by adding checks and error handling for a smoother user experience.

## How to Reproduce

1. Open `bug.js`.
2. Observe that the code lacks error handling for the case where MetaMask is unavailable.
3. Run `bugSolution.js` to see the improved implementation.