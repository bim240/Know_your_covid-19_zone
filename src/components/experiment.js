import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: "",
    };
  }
  handleSearch = (selectedOption) => {
    this.setState({ district: selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    console.log(this.props.cities, "cities");
    return (
      <div className=" home_section pt-5">
        <h3 className="font-weight-bolder pb-3 home_heading">Know your Zone</h3>
        <div className="search_section">
          <div className="select_input mr-3">
            <Select
              name="district"
              value={this.state.district}
              onChange={this.handleSearch}
              options={this.props.cities}
            />
          </div>
          <button className="btn btn-success "> Search</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("mapstatetoprops");
  return {
    zoneInfo: state,

    cities: state.zoneDetails
      ? state.zoneDetails.reduce((acc, city) => {
          acc = acc.concat({ value: city.district, label: city.district });
          return acc;
        }, [])
      : "",
  };
}
export default connect(mapStateToProps)(Home);
