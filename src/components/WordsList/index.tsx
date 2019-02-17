import * as React from "react"
import Container from "../../components/Container"
import { PaginatedWords, WordsApi } from "../../domains/words"
import WordListItem from "./WordListItem"

type State = {
  words: PaginatedWords,
}

class WordsList extends React.Component<any, State> {
  public state: State = {
    words: {
      items: [],
      total: 0,
    },
  }
  public async componentDidMount() {
    const words = await WordsApi.getWords(1, 20)
    this.setState({ words })
  }
  public render() {
    return (
      <Container>
        {this.state.words.items.map((word, ind) => (
          <WordListItem key={ind} word={word} />
        ))}
      </Container>
    )
  }
}

export default WordsList
