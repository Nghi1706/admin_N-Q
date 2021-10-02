import { INIT_STATE } from "../../constant";
import { createSchedule, getType, fetchSchedule, updateSchedule } from "../actions";

export default function scheduleReducer(state = INIT_STATE.schedule, action) {
    switch (action.type) {
        case getType(createSchedule.createScheduleRequest):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(createSchedule.createScheduleSuccess):
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload],
            };
        case getType(createSchedule.createScheduleFailure):
            return {
                ...state,
                isLoading: false,
            };
        case getType(fetchSchedule.fetchScheduleRequest):
            return {
                ...state,
                isLoading: false,
            };
        case getType(fetchSchedule.fetchScheduleSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getType(fetchSchedule.fetchScheduleFailure):
            return {
                ...state,
                isLoading: false,
            };
        case getType(updateSchedule.updateScheduleRequest):
            return {
                ...state,
                data: [state.data.map(schedule => schedule._id === action.payload._id ? action.payload : schedule)],
            };

        default:
            return state;
    }
}