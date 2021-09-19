import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import MoneyIcon from '@material-ui/icons/Money';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <ShoppingCartOutlinedIcon/>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <MobileFriendlyIcon/>
        </TimelineContent>

      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        <MoneyIcon/>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}