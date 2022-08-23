import { RefObject, useCallback, useEffect } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

interface useInfiniteScrollProps {
  target: RefObject<HTMLDivElement>
  hasNextPage?: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>
  root?: null
  rootMargin?: string
  threshold?: number
}

const useInfiniteScroll = ({
  target,
  hasNextPage,
  fetchNextPage,
  root = null,
  rootMargin = '0px',
  threshold = 1,
}: useInfiniteScrollProps) => {
  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    [hasNextPage, fetchNextPage],
  )

  useEffect(() => {
    let observer: IntersectionObserver

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      })

      observer.observe(target.current)
    }

    return () => observer && observer.disconnect()
  }, [target, onIntersect])
  return
}

export default useInfiniteScroll
