import React from "react";
import { connect } from "react-redux";
import { add, changeSubject, clearCreateObject } from "./actions";
import ToDoListPage from "./components/ToDoListPage";
import { bindActionCreators } from "redux";

class ToDoListContainer extends React.Component {
  onChangeText(e) {
    this.props.changeSubject(e.target.value);
  }

  submitAdd() {
    this.props.add(this.props.createObject);
    this.props.clearCreateObject();
  }

  render() {
    return (
      <div>
        <h4>To Do List</h4>
        <ToDoListPage
          subject={this.props.createObject.subject}
          add={this.submitAdd.bind(this)}
          onChangeSubject={e => {
            this.onChangeText(e);
          }}
          list={this.props.ToDoList}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ToDoList: state.toDoList.list,
    createObject: state.toDoList.createToDo
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add,
      changeSubject,
      clearCreateObject
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
