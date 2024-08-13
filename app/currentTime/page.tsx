// app/time/page.tsx
'use client';

import React, { Component } from 'react';

interface State {
  currentTime: string;
}

class Time extends Component<{}, State> {
  private timerID?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-4 text-blue-300">Current Time</h1>
          <p className="text-6xl font-mono text-blue-100">
            {this.state.currentTime}
          </p>
        </div>
      </div>
    );
  }
}

export default Time;