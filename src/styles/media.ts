enum Breakpoint {
  PhoneMax = 599,
  TablePortraitMin = 600,
  TablePortraitMax = 899,
  TableLandscapeMin = 900,
  TableLandscapeMax = 1199,
  DesktopMin = 1200,
  DesktopMax = 1799,
  BigDesktopMin = 1800
}

type QueryType = {
  minWidth?: Breakpoint;
  maxWidth?: Breakpoint;
};

export function mediaQuery(optionsOrMinWidth: QueryType) {
  const { minWidth, maxWidth } = optionsOrMinWidth;
  const queries = [];

  if (typeof minWidth === 'number') {
    queries.push(`(min-width: ${minWidth}px)`);
  }
  if (typeof maxWidth === 'number') {
    queries.push(`(max-width: ${maxWidth}px)`);
  }

  if (process.env.NODE_ENV !== 'production') {
    if (queries.length === 0) {
      console.error('Media queries should have at least one query');
    }
  }

  return `@media ${queries.join(' and ')}`;
}

export default {
  phoneOnly: mediaQuery({ maxWidth: Breakpoint.PhoneMax }),
  tabletPortraitOnly: mediaQuery({
    minWidth: Breakpoint.TablePortraitMin,
    maxWidth: Breakpoint.TablePortraitMax
  }),
  tabletOnly: mediaQuery({
    minWidth: Breakpoint.TableLandscapeMin,
    maxWidth: Breakpoint.TableLandscapeMax
  }),
  desktopOnly: mediaQuery({
    minWidth: Breakpoint.DesktopMin,
    maxWidth: Breakpoint.DesktopMax
  }),
  bigDesktopOnly: mediaQuery({ minWidth: Breakpoint.BigDesktopMin }),
  tabletPortraitAndSmaller: mediaQuery({
    maxWidth: Breakpoint.TablePortraitMax
  }),
  tabletLandscapeAndSmaller: mediaQuery({
    maxWidth: Breakpoint.TableLandscapeMax
  }),
  desktopAndSmaller: mediaQuery({ maxWidth: Breakpoint.DesktopMax }),
  tabletPortraitAndBigger: mediaQuery({
    minWidth: Breakpoint.TablePortraitMin
  }),
  tabletLandscapeAndBigger: mediaQuery({
    minWidth: Breakpoint.TableLandscapeMin
  }),
  desktopAndBigger: mediaQuery({ minWidth: Breakpoint.DesktopMin })
};
