import React, { Component } from "react";
import "../App.css"
import axios from "axios"
class Home extends Component {

  state = {
    sortAsc: true,
    searc: "",
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=30").then((response) => {
      console.log(response);
      this.setState({
        employees: response.data.results,
        filteredEmployees: response.data.results,
      });
    });
  }
  sortEmployees = () => {
    function compareAsc(a, b) {
      if (a.name.first > b.name.first) return 1;
      if (b.name.first > a.name.first) return -1;

      return 0;
    }
    function compareDesc(a, b) {
      if (a.name.first > b.name.first) return -1;
      if (b.name.first > a.name.first) return 1;

      return 0;
    }
    if (this.state.sortAsc) {
      const sortedEmployees = this.state.filteredEmployees.sort(compareAsc);
      this.setState({
        filteredEmployees: sortedEmployees,
        sortAsc: false,
      });
    } else {
      const sortedEmployees = this.state.filteredEmployees.sort(compareDesc);
      this.setState({
        filteredEmployees: sortedEmployees,
        sortAsc: true,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.filterEmployees();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  filterEmployees = () => {
    const searchTerm = this.state.search.toLowerCase();
    this.setState({
      filteredEmployees: this.state.employees.filter(
        (employee) =>
          employee.name.first.toLowerCase().includes(searchTerm) ||
          employee.name.last.toLowerCase().includes(searchTerm)
      ),
    });
  };


  render() {
    return (
        <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">React Employee Directory</h1>
              <p className="lead">Filter by name or search by name</p>
            </div>
          </div>
          <div className="form-inline">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="search"
                  value={this.state.search}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col" id="hoverName" onClick={this.sortEmployees}> Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filteredEmployees.map((employee) => (
                    <tr>
                      <th scope="row">
                        <img src={employee.picture.medium} alt="random" />
                      </th>
                      <td>
                        {employee.name.first} {employee.name.last}
                      </td>
                      <td>{employee.phone}</td>
                      <td>{employee.email}</td>
                      <td>{employee.dob.date}</td>
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