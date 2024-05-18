export const cycle = <T>({
  value,
  states,
  comparator,
}: {
  value?: T
  states: Array<T>
  comparator?: (v: T, c: T) => boolean
}) => {
  if (!value) return states[0]
  const currIndex = states.findIndex(
    (curr) => comparator?.(value, curr) ?? value === curr,
  )
  return states[currIndex === states.length - 1 ? 0 : currIndex + 1]
}
