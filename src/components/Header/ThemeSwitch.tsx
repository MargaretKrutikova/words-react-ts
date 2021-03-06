import styled, { omitProps, ThemeMode } from "../../theme"

type Props = {
  mode: ThemeMode,
}

type SwitchButtonProps = {
  isActive: boolean,
} & React.HTMLProps<HTMLDivElement>

const SwitchButton = styled.div<SwitchButtonProps>(({ theme, isActive }) => ({
  padding: 5,
  borderRadius: "50%",
  position: "relative",
  zIndex: 1,
  color: isActive ? theme.colors.primary : "inherit",
  cursor: isActive ? "default" : "pointer",
}))

const ThemeSwitch = styled("div", omitProps<Props>("mode"))<Props>(
  ({ theme: { colors }, mode }) => ({
    marginLeft: "auto",
    display: "flex",
    border: `2px solid ${colors.background1}`,
    borderRadius: 20,
    position: "relative",
    ":after": {
      content: "''",
      position: "absolute",
      left: 0,
      backgroundColor: colors.background1,
      borderRadius: 14,
      width: "50%",
      height: "100%",
      transition: "0.2s transform ease",
      transform: `translateX(${mode === "light" ? "100%" : 0})`,
    },
  }),
)

export { SwitchButton }
export default ThemeSwitch
