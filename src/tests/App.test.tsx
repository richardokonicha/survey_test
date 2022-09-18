// testing the App component and its children mounted with success

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Table from '../components/Table';
import type { ItemProps } from '../react-app-env';

const dummy: { items: ItemProps[] } = {
  items: [
    {
      id: 'fskflznldsknfkndaskndksl',
      comment: 'Hello World I am just a dummy comment',
      computed_browser: {
        Browser: 'Chrome',
        Version: '32.0',
        Platform: 'Win7',
      },
      rating: '4',
      browser: {
        platform: 'Chrome',
      },
    },
  ],
};

describe('UI Healthy cheers', () => {
  it('App and Dashboard components are rendered', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('Table is rendered correctly with data', () => {
    render(<Table data={dummy.items} />);
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('dummy comment'), { exact: false }),
    ).toBeInTheDocument();
  });
});
