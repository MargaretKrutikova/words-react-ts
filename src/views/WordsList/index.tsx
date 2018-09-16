import { ApplicationState } from 'modules/state';
import { PaginatedWords, WordsApi, WordsState } from 'modules/words';
import { actions } from 'modules/words';
import * as React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import { Action, Dispatch } from 'redux';
import media from 'styles/media';
import { styled } from 'styletron-react';
import WordListItem from './WordListItem';

type PropType = {
  words: WordsState;
  fetchWords: () => void;
  fetchWordsSuccess: (data: PaginatedWords) => void;
  fetchWordsFailure: () => void;
};

const ListGroupStyled = styled(ListGroup, {
  [media.phoneOnly]: {
    width: '100%'
  }
});

class WordsList extends React.Component<PropType> {
  public async componentDidMount() {
    this.props.fetchWords();

    const words = await WordsApi.getWords(1, 20);
    this.props.fetchWordsSuccess(words);
  }
  public render() {
    return (
      <ListGroupStyled>
        {this.props.words.items.map((word, ind) => (
          <WordListItem key={ind} word={word} />
        ))}
      </ListGroupStyled>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({ words: state.words });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWords: () => dispatch(actions.fetchWords()),
  fetchWordsSuccess: (data: PaginatedWords) =>
    dispatch(actions.fetchWordsSuccess(data)),
  fetchWordsFailure: () => dispatch(actions.fetchWordsFailure())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordsList);
