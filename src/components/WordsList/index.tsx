/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useCallback, useEffect, useReducer, useState } from "react";
import Box from "../Box";
import WordListItem from "./WordListItem";

import { getPaginatedWords, saveWord } from "../../state/words/effects";
import wordsReducer, { initialState } from "../../state/words/reducer";
import Button from "../Button";
import Input from "../Input";

const WordsList: React.FunctionComponent<{}> = () => {
  const [state, dispatch] = useReducer(wordsReducer, initialState);
  const [newWord, setNewWord] = useState("");
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewWord(e.target.value);
    },
    [setNewWord],
  );

  useEffect(() => {
    getPaginatedWords(state, dispatch);
  }, []);

  const addWord = useCallback(
    () =>
      saveWord({
        value: newWord,
        translations: [],
        explanations: [],
        usages: [],
      }),
    [newWord],
  );

  return (
    <Box pt={{ xs: "small", md: "large" }}>
      <Input onChange={handleInputChange} value={newWord} />
      <Button onClick={addWord}> Add word </Button>

      {state.data.items.map((word, ind) => (
        <WordListItem key={ind} word={word} />
      ))}
    </Box>
  );
};

export default WordsList;
