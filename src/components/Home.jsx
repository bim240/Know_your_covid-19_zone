import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: "",
      searchedCities: [],
    };
  }
  handleSearch = (e) => {
    this.setState({ district: e.target.value });
  };

  filteredCities = () => {
    let regex = new RegExp(this.state.district, "ig");

    var searchedCities =
      this.props.cities && this.props.cities.filter((city) => regex.test(city));

    return searchedCities;
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.district === nextState.district) {
      return false;
    } else {
      return true;
    }
  }
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
                {this.props.cities &&
                  this.filteredCities().map((city) => (
                    <option value={city} key={uuid()} />
                  ))}
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
    cities: state.zoneDetails
      ? state.zoneDetails.reduce((acc, city) => {
          acc = acc.concat(city.district);
          return acc;
        }, [])
      : "",
  };
}
export default connect(mapStateToProps)(Home);
