export const keys = Object.keys as <T>(o: T) => Array<Extract<keyof T, string>>

export const removeKey = (key: string, { [key]: _, ...rest }) => rest

export const hex2Rgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
