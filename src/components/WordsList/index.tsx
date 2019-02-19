/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useEffect, useReducer } from "react";
import Box from "../Box";
import WordListItem from "./WordListItem";

import { getPaginatedWords } from "../../state/words/effects";
import wordsReducer, { initialState } from "../../state/words/reducer";

const WordsList: React.FunctionComponent<{}> = () => {
  const [state, dispatch] = useReducer(wordsReducer, initialState);

  useEffect(() => {
    getPaginatedWords(state, dispatch);
  }, []);

  return (
    <Box pt={{ xs: "small", md: "large" }}>
      {state.data.items.map((word, ind) => (
        <WordListItem key={ind} word={word} />
      ))}
    </Box>
  );
};

export default WordsList;
