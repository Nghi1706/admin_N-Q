import { INIT_STATE } from "../../constant";
import { fetchInfo, getType } from "../actions";

export default function infoReducer(state = INIT_STATE.info, action) {
    switch (action.type) {
        case getType(fetchInfo.fetchInfoRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(fetchInfo.fetchInfoSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(fetchInfo.fetchInfoFailure):
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}