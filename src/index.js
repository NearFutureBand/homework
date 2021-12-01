import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoTag from './components/VideoTag';
import Button from './components/Button';

ReactDOM.render(
  <React.StrictMode>
    <VideoTag />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);
