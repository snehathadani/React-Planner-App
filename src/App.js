import React from 'react';
import TaskList from './Components/TaskList/TaskList';
import TaskForm from './Components/ListForm/TaskForm';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
      }
      ],
      currentId: 0,
      
    
    };
  }
   handleAddTask = (text) => {
      const newTask = {task: text, id: this.state.currentId, completed: false};
      this.setState({tasks: [...this.state.tasks, newTask], currentId:this.state.currentId+1})
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
      localStorage.setItem('currentId' , this.state.currentId)
  }

  handleDelete = (id)=> {
    console.log(id);
    const remainingTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: remainingTasks});
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  handleCompleted= (id)=> {
    const completedTasks= this.state.tasks.map(t=> {
      if (t.id===id) {
        return ({id: t.id, task: t.task, completed: true})
      } else {
        return t;
      } 
      })
    this.setState({tasks: completedTasks})
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  };
  
  

  render() {
    return (
      <div> 

        
        <TaskList tasks = {this.state.tasks} onDeleteTask={this.handleDelete}
        onCompleteTask={this.handleCompleted}/>
        <TaskForm onAddTask = {this.handleAddTask}/>
          
      </div>
    );
  }
};


export default App;
