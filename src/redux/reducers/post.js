import { INIT_STATE } from "../../constant";
import { getPosts, getType, updateCost, deleteCost } from "../actions";

export default function postsReducer(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(getPosts.getPostsFailure):
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