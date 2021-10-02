import { INIT_STATE } from "../../constant";
import { createCost, getType, updateCost, deleteCost } from "../actions";

export default function CostReducer(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(createCost.createCostRequest):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(createCost.createCostSuccess):
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload],
            };
        case getType(createCost.createCostFailure):
            return {
                ...state,
                isLoading: false,
            };
        case getType(updateCost.updateCostRequest):
            return {
                ...state,
                data: [state.data.map(edit_s => edit_s._id === action.payload._id ? action.payload : edit_s)],
            };
        case getType(deleteCost.deleteCostRequest):
            return {
                ...state,
                data: [state.data.map(dell => dell._id === action.payload._id ? action.payload : dell)],
            };
        default:
            return state;
    }
}