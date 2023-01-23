import React from "react";
import { DragDropContext, DropTarget, DragSource } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import "./styles.css";
import axios from 'axios';

const tasks = [
  { _id: 1, title: "taches.titre",title1: "mmmmmmmmmmmm", status: "backlog" },

   { _id: 2, title: "Second Task", status: "backlog" },
   { _id: 3, title: "Third Task", status: "backlog" },
  
   { _id: 4, title: "Fourth Task", status: "new" },
   { _id: 5, title: "Fifth Task", status: "new" },
   { _id: 6, title: "Sixth Task", status: "going" },
   { _id: 7, title: "Seventh Task", status: "review" },
   { _id: 8, title: "Eighth Task", status: "review" },
   { _id: 9, title: "Ninth Task", status: "done" },
   { _id: 10, title: "Tenth Task", status: "done" },
];

const labels = ["backlog", "new", "going", "review",  "kkk", "lll","done"];
const labelsMap = {
  backlog: "To Do",
  new: "Lundi",
  going: "Mardi",
  review: "Mercredi",
  kkk: "Jeudi",
  lll: "Vendredi",
  done: "Samedi",
};

const classes = {
  board: {
    display: "flex",
    margin: "0",
    width: "96vw",
    fontFamily: 'Arial, "Helvetica Neue", sans-serif',
  },
  column: {
    width: "12vw",
    height: "80vh",
    margin: "0 auto",
    backgroundColor:"#f4f5f7",
  },
  columnHead: {
    textAlign: "center",
    padding: 10,
    fontSize: "1.5em",
    backgroundColor: "rgba(190,190,255,1)",
    color: "black",
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: "1.2em",
    cursor: "pointer",
    backgroundColor: "#fad6d6",
  },
};

class Kanban extends React.Component {
  
  getEmployeeList() {
    axios.get('http://127.0.0.1:3001/api/tache')
    .then((response) => {
    console.log(response.data);
    this.setState({
    tasks: response.data
    });
    })
    .catch((error) => {
    console.log(error);
    })
    }
  constructor(props) {
    super(props);
    this.state = {
      tasks,
    };
  }
  update = (id, status) => {
    const { tasks } = this.state;
    const task = tasks.find((task) => task._id === id);
    // console.log("task", task);
    task.status = status;
    const taskIndex = tasks.indexOf(task);
    const newTasks = update(tasks, {
      [taskIndex]: { $set: task },
    });
    console.log("newTask", newTasks);
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <main>
        <header className="header">Example Kanban Board </header>
        <section style={classes.board}>
          {labels.map((channel) => (
            <KanbanColumn status={channel}>
              <div style={classes.column}>
                <div style={classes.columnHead}>{labelsMap[channel]}</div>
                <div>
                  {tasks
                    .filter((item) => item.status === channel)
                    .map((item) => (
                      <KanbanItem id={item._id} onDrop={this.update}>
                        <div style={classes.item}>{item.title}</div>
                      </KanbanItem>
                    ))}
                </div>
              </div>
            </KanbanColumn>
          ))}
        </section>
      </main>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);

// Column

const boxTarget = {
  drop(props) {
    return { name: props.status,
     };
  },
};

class KanbanColumn extends React.Component {
  render() {
    return this.props.connectDropTarget(<div>{this.props.children}</div>);
  }
}

KanbanColumn = DropTarget("kanbanItem", boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(KanbanColumn);

// Item

const boxSource = {
  beginDrag(props) {
    return {
      name: props.id,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      props.onDrop(monitor.getItem().name, dropResult.name);
    }
  },
};

class KanbanItem extends React.Component {
  render() {
    return this.props.connectDragSource(<div>{this.props.children}</div>);
  }
}

KanbanItem = DragSource("kanbanItem", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(KanbanItem);
