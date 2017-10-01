import React from "react";
import CreateForm from "./presenters/CreateForm";
import List from "./presenters/List";
class ToDoListPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CreateForm
            subject={this.props.subject}
            add={this.props.add}
            onChangeSubject={this.props.onChangeSubject}
          />
        </div>
        <div>
          <List data={this.props.list} />
        </div>
      </div>
    );
  }
}

export default ToDoListPage;
