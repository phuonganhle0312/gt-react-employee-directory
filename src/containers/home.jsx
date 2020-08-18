import React, { Component } from "react";

class Home extends Component {
  state = {
    employees: [
      {
        image: "1",
        name: "Tiger Nixon",
        phone: "706",
        email: "@outlook",
        DOB: "xx/xx/xxxx",
      },
      {
        image: "2",
        name: "Garrett Winters",
        phone: "404",
        email: "@gmail",
        DOB: "xx/xx/xxxx",
      },
      {
        image: "3",
        name: "Bill Bpb",
        phone: "678",
        email: "@outlook",
        DOB: "xx/xx/xxxx",
      },
      {
        image: "4",
        name: "Karen Cob",
        phone: "404",
        email: "@outlook",
        DOB: "xx/xx/xxxx",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employees.map((employee) => (
                  <tr>
                  <th scope="row">{employee.images}</th>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.DOB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;