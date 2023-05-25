import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const bbdd = {
  header: {
    title: 'The Game Awards',
    menu: [
      { id: uuidv4(), title: 'Home', href: '#', active: true },
      { id: uuidv4(), title: 'News', href: '#' },
      { id: uuidv4(), title: 'About', href: '#' },
      { id: uuidv4(), title: 'Rewind', href: '#' },
      { id: uuidv4(), title: 'Watch', href: '#' },
      { id: uuidv4(), title: 'Jury', href: '#' },
      { id: uuidv4(), title: 'Nominees', href: '#' },
      { id: uuidv4(), title: "Players' voice", href: '#', disabled: true },
      { id: uuidv4(), title: 'Future Class', href: '#', disabled: true },
    ],
    sign: {
      icon: 'signin',
      title: 'Sign In',
    },
  },
  intro: {
    title: 'The Game Awards',
    date: 'December 8',
    place: 'Microsoft Theater, Los Angeles',
    marquee: {
      top: 'Global celebration of video games',
      bottom: 'streams live on all platforms',
    },
  },
  news: {
    title: 'news',
    bottom: 'View all',
    list: [
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
      {
        id: uuidv4(),
        src: '#',
        date: 'November 16, 2022',
        title: 'The Game Awards: The IMAX Experience',
      },
    ],
  },
  explore: {
    title: 'Explore',
    section: [
      {
        id: uuidv4(),
        title: 'Nominees',
        claim: 'Explore the nominees and vote now',
        src: '',
      },
      {
        id: uuidv4(),
        title: 'Future Class',
        claim: 'Meet the next generation this december',
        src: '',
      },
    ],
  },
  insider: {
    title: 'TGA Insider',
    description: 'Sign up to show updates and news',
  },
  footer: {
    menu: [
      { id: uuidv4(), title: 'About', href: '' },
      { id: uuidv4(), title: 'Jury', href: '' },
      { id: uuidv4(), title: 'Privacy', href: '' },
      { id: uuidv4(), title: 'Subscriptions', href: '' },
      { id: uuidv4(), title: 'FAQ', href: '' },
      { id: uuidv4(), title: 'Contact', href: '' },
      { id: uuidv4(), title: 'Terms', href: '' },
    ],
    rrss: [
      { id: uuidv4(), icon: 'twitter', href: '#', title: 'twitter' },
      { id: uuidv4(), icon: 'instagram', href: '#', title: 'instagram' },
      { id: uuidv4(), icon: 'tiktok', href: '#', title: 'tiktok' },
      { id: uuidv4(), icon: 'discord', href: '#', title: 'discord' },
      { id: uuidv4(), icon: 'youtube', href: '#', title: 'youtube' },
      { id: uuidv4(), icon: 'twitch', href: '#', title: 'twitch' },
      { id: uuidv4(), icon: 'facebook', href: '#', title: 'facebook' },
    ],
  },
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
  );
};
