import React, { useState, useEffect, useRef } from 'react';
import { messageAdded } from 'redux/messagesSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { dateToString } from 'utils';
import { nanoid } from '@reduxjs/toolkit';
import { INPUT_MESSAGE } from 'commons';
import * as S from './style';

interface IInputMessage {
  initialInput: string;
}

export function InputMessage({ initialInput }: IInputMessage) {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const textAreaRef = useRef(null);

  const [message, setMessage] = useState('');
  const [inputRows, setInputRows] = useState(1);

  useEffect(() => {
    setMessage(initialInput);
  }, [initialInput]);

  const clearInput = () => {
    setMessage('');
    setInputRows(1);
  };

  const setRows = (amount: number) => {
    setInputRows(Math.min(INPUT_MESSAGE.MAX_ROWS, amount));
  };

  const convertInputToMessage = (input: string) => ({
    ...user,
    content: input,
    date: dateToString(new Date()),
    messageId: nanoid(),
  });

  const dispatchMessage = (input: string) => {
    const convertedMessage = convertInputToMessage(input);
    dispatch(messageAdded(convertedMessage));
  };

  const sendMessage = () => {
    clearInput();
    if (message === '' || message === '\n') return;
    dispatchMessage(message);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) {
        setRows(inputRows + 1);
        return;
      }
      sendMessage();
    }
  };

  return (
    <S.Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
      <S.InputBox>
        <S.TextArea
          placeholder="Enter message"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={inputRows}
          cols={INPUT_MESSAGE.WIDTH}
          value={message}
          ref={textAreaRef}
        >
          {initialInput}
        </S.TextArea>
        <S.Button type="button" onClick={() => sendMessage()}>
          전송
        </S.Button>
      </S.InputBox>
    </S.Form>
  );
}