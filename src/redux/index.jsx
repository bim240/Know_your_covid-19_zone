import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducers/zoneInfo";

export let store = createStore(dataReducer, applyMiddleware(thunk));
