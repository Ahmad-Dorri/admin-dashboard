import React from 'react';
import {
  Home,
  Person,
  Message,
  WatchLater,
  Task,
  People,
  Settings,
  Support,
  PrivacyTip,
} from '@mui/icons-material';

interface LinkType {
  text: string;
  href: string;
  icon: React.ReactElement;
}

export const topLinks: LinkType[] = [
  {
    text: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    text: 'Profile',
    href: '/profile',
    icon: <Person />,
  },
  {
    text: 'Messages',
    href: '/messages',
    icon: <Message />,
  },
  {
    text: 'History',
    href: '/history',
    icon: <WatchLater />,
  },
  {
    text: 'Tasks',
    href: '/tasks',
    icon: <Task />,
  },
  {
    text: 'Communities',
    href: '/communities',
    icon: <People />,
  },
];

export const bottomLinks: LinkType[] = [
  {
    text: 'Settings',
    href: '/settings',
    icon: <Settings />,
  },
  {
    text: 'Support',
    href: '/support',
    icon: <Support />,
  },
  {
    text: 'Privacy',
    href: '/privacy',
    icon: <PrivacyTip />,
  },
];
