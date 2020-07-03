function getZoneInfo() {
  return function (dispatch) {
    dispatch({ type: "DATA_FETCH_IN_PROGRESS" });
    fetch("https://api.covid19india.org/zones.json")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ payload: res.zones, type: "DATA_FETCH_SUCCESS" });
      });
  };
}

module.exports = { getZoneInfo };
