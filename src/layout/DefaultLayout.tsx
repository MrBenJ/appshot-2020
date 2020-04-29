/** @jsx jsx */
import React from 'react';
import cn from 'classnames';
import { jsx } from '@emotion/core';

import style from './DefaultLayout.style';

type Props = {
  className?: string;
};

const DefaultLayout: React.FC<Props> = props => {
  const {
    className,
    children
  } = props;

  return (
    <div className={cn(className)} css={style}>
      {children}
    </div>
  )
}
export default DefaultLayout;
