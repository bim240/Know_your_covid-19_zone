import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { withSnackbar } from "notistack";
import Card from "./Card";

class HomeWithRegex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: "",
      cardDispaly: "",
    };
  }
  enqueueSnackbar = this.props.enqueueSnackbar;
  handleSearch = (e) => {
    this.setState({ district: e.target.value });
  };

  filteredCities = () => {
    let regex = new RegExp(this.state.district, "ig");

    var searchedCities =
      this.props.cities && this.props.cities.filter((city) => regex.test(city));

    return searchedCities;
  };
  handleResetSearch = () => {
    this.setState({ cardDispaly: "", district: "" });
  };
  handleSearchDistrict = () => {
    let flag = this.props.cities.find((city) => city === this.state.district);

    if (!flag) {
      this.enqueueSnackbar('"Please enter a valid district', {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
      return;
    }
    let newCardDispayDistrict = this.props.zoneInfo.zoneDetails.filter(
      (city) => city.district === this.state.district
    );
    this.setState({ cardDispaly: newCardDispayDistrict });
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
                {this.props.cities &&
                  this.filteredCities().map((city) => (
                    <option value={city} key={uuid()} />
                  ))}
              </datalist>
            )}
          </div>
          <button
            onClick={this.handleSearchDistrict}
            className="btn btn-success ">
            {" "}
            Search
          </button>
        </div>
        {this.state.cardDispaly ? (
          <Card
            district={this.state.cardDispaly[0].district}
            state={this.state.cardDispaly[0].state}
            zone={this.state.cardDispaly[0].zone}
            handleResetSearch={this.handleResetSearch}
          />
        ) : (
          ""
        )}
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
export default withSnackbar(connect(mapStateToProps)(HomeWithRegex));
