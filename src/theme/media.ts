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
  minWidth?: Breakpoint
  maxWidth?: Breakpoint,
}

const mediaQuery = (options: QueryType) => {
  const { minWidth, maxWidth } = options
  const queries = []

  if (minWidth && breakpoints[minWidth] !== undefined) {
    queries.push(`(min-width: ${breakpoints[minWidth]}px)`)
  }
  if (maxWidth && breakpoints[maxWidth] !== undefined) {
    queries.push(`(max-width: ${breakpoints[maxWidth]}px)`)
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
