import { type ReactNode, useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

const ClientGate = ({ children }: { children: () => ReactNode }) => {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true,
  )
  return isServer ? null : children()
}

export { ClientGate }
