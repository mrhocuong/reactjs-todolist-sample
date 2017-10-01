import React from "react";
class CreateForm extends React.Component {
  render() {
    return (
      <div>
        <input  value={this.props.subject} placeholder="" onChange={this.props.onChangeSubject}/>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default CreateForm;
