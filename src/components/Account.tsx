import { Address, useAccount, useEnsName } from 'wagmi'

export function Account(props: { address?: Address }) {
  const { address } = props;
  // const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })

  return (
    <div>
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </div>
  )
}
