/**
 * title: 我是标题
 * description: 我是简介，我可以用 `Markdown` 来编写
 */

import React, { FC } from 'react';

interface TitleProp {
  text: string;
}

const Stitle: FC<TitleProp> = (props) => {
  const { text } = props;
  return <h1>{text}</h1>;
};

export default Stitle;
