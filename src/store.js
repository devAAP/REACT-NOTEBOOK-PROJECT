import { createStore } from "redux";
import reducer from "../src/reducers/reducer";



export const store = createStore(reducer);