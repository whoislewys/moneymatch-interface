This is a [wagmi](https://wagmi.sh) + [RainbowKit](https://rainbowkit.com) + [Vite](https://vitejs.dev/) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:5173](http://localhost:5173) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/App.tsx`) will automatically update the webpage.

# Learn more

To learn more about [Vite](https://vitejs.dev/), [RainbowKit](https://rainbowkit.com) or [wagmi](https://wagmi.sh), check out the following resources:

- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [RainbowKit Documentation](https://rainbowkit.com/docs/introduction) – learn more about RainbowKit (configuration, theming, advanced usage, etc).
- [Vite Documentation](https://vitejs.dev/) – learn about Vite features and API.


## learnings
Lesson: Just learned the hard way you can't decode indexed string values in solidity events
need to index the player ids for the arbiter to find the escrow creation events for given game between users
and need the updated player id values to update ui for both players when the escrow is created

Soooo instead of being able to get the player ids off the EscrowCreated event, pluck off the address of the newly created Escrow, then query that Escrow contract for player1Id and player2Id

