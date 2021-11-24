import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}
export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});
export const fetchInfo = createActions({
    fetchInfoRequest: undefined,
    fetchInfoSuccess: (payload) => payload,
    fetchInfoFailure: (err) => err,
});
export const fetchSchedule = createActions({
    fetchScheduleRequest: undefined,
    fetchScheduleSuccess: (payload) => payload,
    fetchScheduleFailure: (err) => err,
});
export const createSchedule = createActions({
    createScheduleRequest: (payload) => payload,
    createScheduleSuccess: (payload) => payload,
    createScheduleFailure: (err) => err,
});
export const createCost = createActions({
    createCostRequest: (payload) => payload,
    createCostSuccess: (payload) => payload,
    createCostFailure: (err) => err,
}); export const deleteCost = createActions({
    deleteCostRequest: (payload) => payload,
    deleteCostSuccess: (payload) => payload,
    deleteCostFailure: (err) => err,
});
export const updateCost = createActions({
    updateCostRequest: (payload) => payload,
    updateCostSuccess: (payload) => payload,
    updateCostFailure: (err) => err,
});
export const updateSchedule = createActions({
    updateScheduleRequest: (payload) => payload,
    updateScheduleSuccess: (payload) => payload,
    updateScheduleFailure: (err) => err,
});


