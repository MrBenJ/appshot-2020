import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IndexPageProps extends RouteComponentProps {}

export default function IndexPage(props: IndexPageProps) {
  return (
    <div className="flex-center flex1 flex-column">Index Page</div>
  );
}
