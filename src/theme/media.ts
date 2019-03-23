export type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number,
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

type Breakpoint = keyof Breakpoints

type QueryType = {
  minWidth?: number | Breakpoint
  maxWidth?: number | Breakpoint,
}

const breakpointFromQuery = (query?: number | Breakpoint): number | undefined =>
  typeof query === "number"
    ? query
    : query !== undefined
    ? breakpoints[query]
    : undefined

const mediaQuery = (options: QueryType) => {
  const { minWidth, maxWidth } = options
  const queries = []

  const minBreakpoint = breakpointFromQuery(minWidth)
  if (minBreakpoint !== undefined) {
    queries.push(`(min-width: ${minBreakpoint}px)`)
  }

  const maxBreakpoint = breakpointFromQuery(maxWidth)
  if (maxBreakpoint !== undefined) {
    queries.push(`(max-width: ${maxBreakpoint}px)`)
  }

  if (process.env.NODE_ENV !== "production") {
    if (queries.length === 0) {
      console.error("Media queries should have at least one query")
    }
  }

  return `@media ${queries.join(" and ")}`
}

export default {
  up: (breakpoint: Breakpoint) => mediaQuery({ minWidth: breakpoint }),
  down: (breakpoint: Breakpoint) => mediaQuery({ maxWidth: breakpoint }),
  between: (minWidth: Breakpoint, maxWidth: Breakpoint) =>
    mediaQuery({ minWidth, maxWidth }),
  only: (breakpoint: Breakpoint) =>
    mediaQuery({ minWidth: breakpoint, maxWidth: breakpoint }),
}
