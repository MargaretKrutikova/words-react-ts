import styled from "../theme"

const Container = styled.div((props) => ({
  maxWidth: props.theme.maxWidth,
  margin: "0 auto",
}))

export default Container
