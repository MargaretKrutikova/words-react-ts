import styled from "../theme"

const Overlay = styled.div(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 1,
  backgroundColor: theme.colors.overlay,
}))

export default Overlay
