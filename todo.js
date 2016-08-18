var TaskList = React.createClass({
    render: function() {
      var taskItems = [
        <TaskItem key={0} description={"Learn React"}/>,
        <TaskItem key={1} description={"Learn Swift"}/>
      ];

      return (
        <div className="taskList">
          {taskItems}
        </div>
      );
    }
  });

var TaskItem = React.createClass({
    getInitialState: function() {
      return {
        done: false
      }
    },

    render: function() {
      var style = this.state.done ?
        {textDecoration: "line-through"} :
        {};
      var onClick = evt => {
        this.setState({done: !this.state.done});
      };

      return (
        <div
          onClick={onClick}
          style={style}
          className="taskItem">
          {this.props.description}
        </div>
      );
    }
  });

ReactDOM.render(
  <TaskList />,
  document.getElementById('example')
);
