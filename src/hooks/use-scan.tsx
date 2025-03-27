import {
  useCallback,
  useEffect,
  useRef
} from "react";

interface bufferCharacter {
  time: number,
  char: string
}

interface buffer {
  current: Array<bufferCharacter>
}

interface config {
  timeToEvaluate?: number,
  averageWaitTime?: number,
  startCharacter?: string[],
  endCharacter?: string[],
  onComplete: (code: string) => void,
  onError?: (error: string) => void,
  minLength?: number,
  ignoreIfFocusOn?: Node,
  stopPropagation?: boolean,
  preventDefault?: boolean,
  container?: Node
}

const useScanDetection = ({
  timeToEvaluate = 100,
  averageWaitTime = 50,
  startCharacter = [],
  endCharacter = ["Enter", "Escape"],
  onComplete,
  onError,
  minLength = 1,
  ignoreIfFocusOn,
  stopPropagation = false,
  preventDefault = false,
  container = document
}: config) => {

  const buffer: buffer = useRef([])
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const timeout: any = useRef(false)

  const clearBuffer = () => {
    buffer.current = []
  }
  const evaluateBuffer = () => {
    clearTimeout(timeout.current)
    const sum = buffer.current
      .map(({ time }, k, arr) => k > 0 ? time - arr[k - 1].time : 0)
      .slice(1)
      .reduce((total, delta) => total + delta, 0)
    const avg = sum / (buffer.current.length - 1)

    const code = buffer.current
      .slice(startCharacter.length > 0 ? 1 : 0)
      .map(({ char }) => char)
      .join("")

    if (
      avg <= averageWaitTime
      && buffer.current.slice(startCharacter.length > 0 ? 1 : 0).length >= minLength
    ) {
      onComplete(code)
    } else {
      avg <= averageWaitTime && !!onError && onError(code)
    }
    clearBuffer()
  }

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.currentTarget !== ignoreIfFocusOn) {
      if (endCharacter.includes(event.key)) {
        evaluateBuffer()
      }
      if (buffer.current.length > 0 || startCharacter.includes(event.key) || startCharacter.length === 0) {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(evaluateBuffer, timeToEvaluate)
        buffer.current.push({ time: performance.now(), char: event.key })
      }
    }
    if (stopPropagation) {
      event.stopPropagation()
    }
    if (preventDefault) {
      event.preventDefault()
    }
  }, [
    startCharacter,
    endCharacter,
    timeToEvaluate,
    onComplete,
    onError,
    minLength,
    ignoreIfFocusOn,
    stopPropagation,
    preventDefault
  ])

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  useEffect(() => {
    container.addEventListener("keydown", (onKeyDown) as EventListener)
    return () => {
      container.removeEventListener("keydown", (onKeyDown) as EventListener)
    }
  }, [onKeyDown])
}

export default useScanDetection