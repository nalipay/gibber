import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
 