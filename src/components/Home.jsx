import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: "",
    };
  }
  handleSearch = (e) => {
    this.setState({ district: e.target.value });
  };
  handleChoice = (e) => {
    console.dir(e.target.value);
  };
  render() {
    return (
      <div className=" home_section pt-5">
        <h3 className="font-weight-bolder pb-3 home_heading">Know your Zone</h3>
        <div className="search_section">
          <div className="search_input mr-3">
            <input
              className="form-control"
              list="districtlist"
              id="district"
              name="district"
              placeholder="search here..."
              value={this.state.district}
              onChange={this.handleSearch}
            />
            {this.state.district && (
              <datalist id="districtlist">
                <option value="Naruto" />
              </datalist>
            )}
          </div>
          <button className="btn btn-success "> Search</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    zoneInfo: state,
  };
}
export default connect(mapStateToProps)(Home);
