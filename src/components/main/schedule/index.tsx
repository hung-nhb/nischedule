import { Paper } from "@mui/material";
import React, { FC, useState } from "react";
import {
	Scheduler,
	MonthView,
	DayView,
	Appointments,
	Toolbar,
	DateNavigator,
	TodayButton,
	AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';

export const ScheduleView: FC = () => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date())
	const [currentMonth, setCurrentMonth] = useState<Number>(new Date().getMonth())

	const data: Array<AppointmentModel> = [
		{
			title: "abc afsd",
			startDate: new Date(2023, 0, 22, 10, 30),
			endDate: new Date(2023, 0, 22, 12, 0),
			id: 0
		},
		{
			title: "asf dsgdfg",
			startDate: new Date(2023, 0, 22, 10, 30),
			endDate: new Date(2023, 0, 22, 15, 0),
			id: 1
		},
		{
			title: "asf dsgdfg",
			startDate: new Date(2023, 0, 22, 10, 30),
			endDate: new Date(2023, 0, 22, 15, 0),
			id: 3
		},
		{
			title: "def",
			startDate: new Date(2023, 0, 25, 10, 30),
			endDate: new Date(2023, 0, 25, 18, 0),
			id: 2
		}
	]

	const TimeTableCell = (props: MonthView.TimeTableCellProps) => {
		if (data.map((item) => new Date(item.startDate).getDate() + "-" + new Date(item.startDate).getMonth()).includes(props.startDate.getDate() + "-" + props.startDate.getMonth()))
			return <MonthView.TimeTableCell {...props} className="monthcell" style={{ backgroundColor: "red" }} onClick={() => setCurrentDate(props.startDate)} />
		else return <MonthView.TimeTableCell {...props} className="monthcell" onClick={() => setCurrentDate(props.startDate)} />
	}

	const handleCurrentDateChange = (newDate: Date) => {
		setCurrentDate(newDate);
	}

	return (
		<>
			<div className="general">
				<Paper>
					<Scheduler data={data}>
						<ViewState onCurrentDateChange={handleCurrentDateChange} />
						<MonthView timeTableCellComponent={TimeTableCell} />
						<Toolbar />
						<DateNavigator />
						<TodayButton />
					</Scheduler>
				</Paper>
			</div>
			<div className="detail">
				<Paper>
					<Scheduler data={data}>
						<ViewState currentDate={currentDate} />
						<DayView startDayHour={7} endDayHour={22} cellDuration={60} />
						<Appointments />
						<AppointmentTooltip />
					</Scheduler>
				</Paper>
			</div>
		</>
	)
}