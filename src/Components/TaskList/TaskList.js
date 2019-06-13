import React from 'react';
import Task from '../Tasks/Task';
import SearchBar from '../ListForm/SearchBar';



class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    updateSearch=(event) => {
        this.setState({search: event.target.value});
    };
  

    render() {
        let filterTasks = this.state.search === "" ? this.props.tasks : this.props.tasks.filter((task)=> {
            //console.log(this.state.search,this.props.tasks.indexOf (this.state.search))
            return task.task.indexOf (this.state.search) !== -1;
        
        });

        //console.log(filterTasks);
    
        return (
            <div> 
            <SearchBar search={this.state.search} onSearchChange={this.updateSearch}/>
            <ul> {filterTasks.map((task)=> {
                    return  (
                    <Task key={task.id} 
                    task={task} 
                    onDeleteTask={this.props.onDeleteTask}
                    onCompleteTask={this.props.onCompleteTask}/>)
                    })}
            </ul>
            </div>
        );
    };
}

export default TaskList;