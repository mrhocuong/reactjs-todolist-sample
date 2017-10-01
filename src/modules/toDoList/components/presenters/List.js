import React from "react";
class List extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Subject</th>
        </tr>
        {this.props.data.map(item => (
          <tr>
            <td>{item.subject}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default List;
