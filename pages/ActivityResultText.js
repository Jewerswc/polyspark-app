import React from 'react';
import './ActivityResultText.module.css';
import ActivityResultTitle from './ActivityResultTitle'
import ActivityResultAction from './ActivityResultAction'

const MyComponent = () => {
    return (
      <>
        <div className="component-wrapper">
          <ActivityResultTitle />
        </div>
        <div className="component-wrapper">
          <ActivityResultAction />
        </div>
      </>
    );
  };
  
  export default MyComponent;