import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface DashboardProps extends RouteComponentProps {}

export default function Dashboard(props: DashboardProps) {
  return <div className="flex1">Dashboard</div>;
}
