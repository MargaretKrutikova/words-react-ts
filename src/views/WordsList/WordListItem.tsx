import { WordEntity } from 'domains/words';
import * as React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import * as Styletron from 'styletron-react';

type PropsType = {
  word: WordEntity;
};

const getWordShortText = (word: WordEntity) => {
  const shortText = [word.translations[0], word.explanations[0], word.usages[0]]
    .filter((value: string) => value)
    .join(', ');

  return shortText;
};

const ListGroupItemStyled = Styletron.styled(ListGroupItem, {
  borderWidth: '1px 0 0 0',
  marginBottom: 0,
  ':first-child': {
    borderTop: 'none'
  }
});

const WordListItem = ({ word }: PropsType) => {
  return (
    <ListGroupItemStyled>
      <ListGroupItemHeading>{word.value}</ListGroupItemHeading>
      <ListGroupItemText>{getWordShortText(word)}</ListGroupItemText>
    </ListGroupItemStyled>
  );
};

export default WordListItem;
