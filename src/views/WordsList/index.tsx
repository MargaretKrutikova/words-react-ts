import { PaginatedWords, WordEntity, WordsApi } from 'modules/words';
import * as React from 'react';
import { ListGroup } from 'reactstrap';
import media from 'styles/media';
import { styled } from 'styletron-react';
import WordListItem from './WordListItem';

type State = {
  words: PaginatedWords;
};

const ListGroupStyled = styled(ListGroup, {
  [media.phoneOnly]: {
    width: '100%'
  }
});

class WordsList extends React.Component<any, State> {
  public state: State = {
    words: {
      items: [],
      total: 0
    }
  };
  public async componentDidMount() {
    const words = await WordsApi.getWords(1, 20);
    this.setState({ words });
  }
  public render() {
    return (
      <ListGroupStyled>
        {this.state.words.items.map((word, ind) => (
          <WordListItem key={ind} word={word} />
        ))}
      </ListGroupStyled>
    );
  }
}

export default WordsList;
