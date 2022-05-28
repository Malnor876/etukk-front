import { useEffect, useState } from "react"

function useResizeObserverSize(target: Element, options?: ResizeObserverOptions): ResizeObserverSize {
  const [size, setSize] = useState<ResizeObserverSize>({ blockSize: target.clientHeight, inlineSize: target.clientWidth })
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const entry: ResizeObserverEntry | undefined = entries[entries.length - 1]
      if (entry == null) return

      if (options?.box) {
        if (options.box in entry) {
          // @ts-expect-error: entry can't be indexed by `options.box`
          const sizes: ResizeObserverSize[] = entry[options.box]
          const size: ResizeObserverSize = sizes[sizes.length - 1]
          setSize(size)

          return
        }
      }

      const size = entry.borderBoxSize[entry.borderBoxSize.length - 1]
      setSize(size)
    })
    resizeObserver.observe(target, options)
    return () => {
      resizeObserver.disconnect()
    }
  }, [target])
  return size
}

export default useResizeObserverSize

export enum DeviceWidths {
  Desktop = 1100,
  Mobile = 560
}