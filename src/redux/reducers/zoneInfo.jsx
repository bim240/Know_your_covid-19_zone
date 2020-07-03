let initialState = {
  isDataFetchInProgress: false,
  zoneDetails: null,
  activeZoneId: null,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_FETCH_IN_PROGRESS":
      return { ...state, isDataFetchInProgress: true };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        zoneDetails: action.payload,
        isDataFetchInProgress: false,
      };
    default:
      return state;
  }
}
