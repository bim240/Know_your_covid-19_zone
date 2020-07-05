import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Card from "./Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: "",
      cardDispaly: "",
    };
  }
  enqueueSnackbar = this.props.enqueueSnackbar;
  handleSearchDistrictName = (selectedOption) => {
    this.setState({ district: selectedOption });
  };
  handleResetSearch = () => {
    this.setState({ cardDispaly: "", district: "" });
  };
  handleSearchDistrict = () => {
    // console.log(JSON.stringify(this.state.district));
    let flag = this.props.cities.find(
      (city) => JSON.stringify(city) === JSON.stringify(this.state.district)
    );
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
      (city) => city.district === this.state.district.value
    );
    this.setState({ cardDispaly: newCardDispayDistrict });
  };

  render() {
    return (
      <div className=" home_section pt-5">
        <h3 className="font-weight-bolder pb-3 home_heading">Know your Zone</h3>
        <div className="search_section">
          <div className="select_input mr-3">
            <Select
              name="district"
              value={this.state.district}
              onChange={this.handleSearchDistrictName}
              options={this.props.cities}
            />
          </div>
          <button
            onClick={this.handleSearchDistrict}
            className="btn btn-secondary ">
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
          acc = acc.concat({ value: city.district, label: city.district });
          return acc;
        }, [])
      : "",
  };
}
export default withSnackbar(connect(mapStateToProps)(Home));
