import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TaskList />
        <TaskForm />
      </div>
    </Provider>
  );
}

export default App;
