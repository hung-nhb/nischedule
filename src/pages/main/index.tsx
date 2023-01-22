import React, { FC } from "react";
import { Scheduler } from '@devexpress/dx-react-scheduler-material-ui';
import { ScheduleView } from "components/main/schedule";
import { Header } from "components/main/header";

export const MainPage: FC = () => {
  return (
    <div className="main">
      <Header />
      <ScheduleView />
    </div>
  )
}