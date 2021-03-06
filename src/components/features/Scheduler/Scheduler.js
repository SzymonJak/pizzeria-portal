import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AllDayPanel,
  AppointmentTooltip,
  AppointmentForm,
  GroupingPanel,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { connectProps } from '@devexpress/dx-react-core';
import { withStyles, makeStyles, fade } from '@material-ui/core/styles';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import LowPriority from '@material-ui/icons/LowPriority';
import Lens from '@material-ui/icons/Lens';
import Event from '@material-ui/icons/Event';
import AccessTime from '@material-ui/icons/AccessTime';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'clsx';

import { priorities } from './demo-data/tasks';
import { data as tasks } from './demo-data/grouping';

const grouping = [{
  resourceName: 'priorityId',
}];

const filterTasks = (items, priorityId) => items.filter(task => (
  !priorityId || task.priorityId === priorityId
));

const getIconById = (id) => {
  if (id === 1) {
    return LowPriority;
  }
  if (id === 2) {
    return Event;
  }
  return PriorityHigh;
};

const styles = theme => ({
  flexibleSpace: {
    margin: '0 auto 0 0',
  },
  prioritySelector: {
    marginLeft: theme.spacing(2),
    minWidth: 140,
    '@media (max-width: 500px)': {
      minWidth: 0,
      fontSize: '0.75rem',
      marginLeft: theme.spacing(0.5),
    },
  },
});

const useTooltipContentStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3, 1),
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: 'border-box',
    width: '400px',
  },
  contentContainer: {
    paddingBottom: theme.spacing(1.5),
  },
  text: {
    ...theme.typography.body2,
    display: 'inline-block',
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
  },
  icon: {
    verticalAlign: 'middle',
  },
  contentItemIcon: {
    textAlign: 'center',
  },
  grayIcon: {
    color: theme.palette.action.active,
  },
  colorfulContent: {
    color: ({ color }) => color[300],
  },
  lens: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    verticalAlign: 'super',
  },
  textCenter: {
    textAlign: 'center',
  },
  dateAndTitle: {
    lineHeight: 1.1,
  },
  titleContainer: {
    paddingBottom: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(1.5),
  },
}));
const groupingStyles = ({ spacing }) => ({
  ...priorities.reduce((acc, priority) => ({
    ...acc,
    [`cell${priority.text.replace(' ', '')}`]: {
      backgroundColor: fade(priority.color[400], 0.1),
      '&:hover': {
        backgroundColor: fade(priority.color[400], 0.15),
      },
      '&:focus': {
        backgroundColor: fade(priority.color[400], 0.2),
      },
    },
    [`headerCell${priority.text.replace(' ', '')}`]: {
      backgroundColor: fade(priority.color[400], 0.1),
      '&:hover': {
        backgroundColor: fade(priority.color[400], 0.1),
      },
      '&:focus': {
        backgroundColor: fade(priority.color[400], 0.1),
      },
    },
  }), {}),
  icon: {
    paddingLeft: spacing(1),
    verticalAlign: 'middle',
  },
});

const DayViewTimeTableCell = withStyles(groupingStyles, { name: 'DayViewTimeTableCell' })(({
  groupingInfo, classes, ...restProps
}) => {
  const groupId = groupingInfo[0].id;
  return (
    <DayView.TimeTableCell
      className={classNames({
        [classes.cellLowPriority]: groupId === 1,
        [classes.cellMediumPriority]: groupId === 2,
        [classes.cellHighPriority]: groupId === 3,
      })}
      groupingInfo={groupingInfo}
      {...restProps}
    />
  );
});
const DayViewDayScaleCell = withStyles(groupingStyles, { name: 'DayViewDayScaleCell' })(({
  groupingInfo, classes, ...restProps
}) => {
  const groupId = groupingInfo[0].id;
  return (
    <DayView.DayScaleCell
      className={classNames({
        [classes.headerCellLowPriority]: groupId === 1,
        [classes.headerCellMediumPriority]: groupId === 2,
        [classes.headerCellHighPriority]: groupId === 3,
      })}
      groupingInfo={groupingInfo}
      {...restProps}
    />
  );
});
const WeekViewTimeTableCell = withStyles(groupingStyles, { name: 'WeekViewTimeTableCell' })(({
  groupingInfo, classes, ...restProps
}) => {
  const groupId = groupingInfo[0].id;
  return (
    <WeekView.TimeTableCell
      className={classNames({
        [classes.cellLowPriority]: groupId === 1,
        [classes.cellMediumPriority]: groupId === 2,
        [classes.cellHighPriority]: groupId === 3,
      })}
      groupingInfo={groupingInfo}
      {...restProps}
    />
  );
});
const WeekViewDayScaleCell = withStyles(groupingStyles, { name: 'WeekViewDayScaleCell' })(({
  groupingInfo, classes, ...restProps
}) => {
  const groupId = groupingInfo[0].id;
  return (
    <WeekView.DayScaleCell
      className={classNames({
        [classes.headerCellLowPriority]: groupId === 1,
        [classes.headerCellMediumPriority]: groupId === 2,
        [classes.headerCellHighPriority]: groupId === 3,
      })}
      groupingInfo={groupingInfo}
      {...restProps}
    />
  );
});
const AllDayCell = withStyles(groupingStyles, { name: 'AllDayCell' })(({
  groupingInfo, classes, ...restProps
}) => {
  const groupId = groupingInfo[0].id;
  return (
    <AllDayPanel.Cell
      className={classNames({
        [classes.cellLowPriority]: groupId === 1,
        [classes.cellMediumPriority]: groupId === 2,
        [classes.cellHighPriority]: groupId === 3,
      })}
      groupingInfo={groupingInfo}
      {...restProps}
    />
  );
});
const GroupingPanelCell = withStyles(groupingStyles, { name: 'GroupingPanelCell' })(({
  group, classes, ...restProps
}) => {
  const groupId = group.id;
  const Icon = getIconById(groupId);
  return (
    <GroupingPanel.Cell
      className={classNames({
        [classes.headerCellLowPriority]: groupId === 1,
        [classes.headerCellMediumPriority]: groupId === 2,
        [classes.headerCellHighPriority]: groupId === 3,
      })}
      group={group}
      {...restProps}
    >
      <Icon
        className={classes.icon}
      />
    </GroupingPanel.Cell>
  );
});

const FlexibleSpace = withStyles(styles, { name: 'FlexibleSpace' })(({
  classes, priority, priorityChange, ...restProps
}) => (
  <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    {/* <PrioritySelector priority={priority} priorityChange={priorityChange} /> */}
  </Toolbar.FlexibleSpace>
));
const TooltipContent = ({
  appointmentData, formatDate, appointmentResources,
}) => {
  const resource = appointmentResources[0];
  const classes = useTooltipContentStyles({ color: resource.color });
  let icon = <LowPriority className={classes.icon} />;
  if (appointmentData.priorityId === 2) {
    icon = <Event className={classes.icon} />;
  }
  if (appointmentData.priorityId === 3) {
    icon = <PriorityHigh className={classes.icon} />;
  }
  return (
    <div className={classes.content}>
      <Grid container alignItems="flex-start" className={classes.titleContainer}>
        <Grid item xs={2} className={classNames(classes.textCenter)}>
          <Lens className={classNames(classes.lens, classes.colorfulContent)} />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div className={classNames(classes.title, classes.dateAndTitle)}>
              {appointmentData.title}
            </div>
            <div className={classNames(classes.text, classes.dateAndTitle)}>
              {formatDate(appointmentData.startDate, { day: 'numeric', weekday: 'long' })}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className={classes.contentContainer}>
        <Grid item xs={2} className={classes.textCenter}>
          <AccessTime className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <div className={classes.text}>
            {`${formatDate(appointmentData.startDate, { hour: 'numeric', minute: 'numeric' })}
              - ${formatDate(appointmentData.endDate, { hour: 'numeric', minute: 'numeric' })}`}
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" key={`${resource.fieldName}_${resource.id}`}>
        <Grid
          className={classNames(classes.contentItemIcon, classes.icon, classes.colorfulContent)}
          item
          xs={2}
        >
          {icon}
        </Grid>
        <Grid item xs={10}>
          <span className={classNames(classes.text, classes.colorfulContent)}>
            {resource.text}
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

TooltipContent.propTypes = {
  formatDate: PropTypes.any,
  appointmentData: PropTypes.any,
  appointmentResources: PropTypes.any,
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: '2018-05-28',
      currentViewName: 'Day',
      data: tasks,
      currentPriority: 0,
      resources: [{
        fieldName: 'priorityId',
        title: 'Priority',
        instances: priorities,
      }],
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
    this.priorityChange = (value) => {
      const { resources } = this.state;
      const nextResources = [{
        ...resources[0],
        instances: value > 0 ? [priorities[value - 1]] : priorities,
      }];

      this.setState({ currentPriority: value, resources: nextResources });
    };
    this.flexibleSpace = connectProps(FlexibleSpace, () => {
      const { currentPriority } = this.state;
      return {
        priority: currentPriority,
        priorityChange: this.priorityChange,
      };
    });
  }

  componentDidUpdate() {
    this.flexibleSpace.update(); 
  }

  render() {
    const {
      data, currentDate, currentViewName, currentPriority, resources,
    } = this.state;

    return (
      <Paper>
        <Scheduler
          data={filterTasks(data, currentPriority)}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <GroupingState
            grouping={grouping}
          />

          <DayView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={DayViewTimeTableCell}
            dayScaleCellComponent={DayViewDayScaleCell}
            intervalCount={2}
          />
          <WeekView
            startDayHour={9}
            endDayHour={17}
            excludedDays={[0, 6]}
            name="Work Week"
            timeTableCellComponent={WeekViewTimeTableCell}
            dayScaleCellComponent={WeekViewDayScaleCell}
          />
          <AllDayPanel
            cellComponent={AllDayCell}
          />

          <Appointments />
          <Resources
            data={resources}
          />
          <IntegratedGrouping />

          <GroupingPanel
            cellComponent={GroupingPanelCell}
          />
          <Toolbar flexibleSpaceComponent={this.flexibleSpace} />
          <DateNavigator />
          <ViewSwitcher />
          <AppointmentTooltip
            contentComponent={TooltipContent}
            showOpenButton
            showCloseButton
          />
          <AppointmentForm readOnly />
        </Scheduler>
      </Paper>
    );
  }
}