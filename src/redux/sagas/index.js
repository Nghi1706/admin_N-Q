import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostsFailure(err));
    }
}
function* createSchedule(action) {
    try {
        const schedule = yield call(api.createSchedule, action.payload);
        console.log('[schedule-created]', schedule);
        yield put(actions.createSchedule.createScheduleSuccess(schedule.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createSchedule.createScheduleFailure(err));
    }
}
function* createCost(action) {
    try {
        const cost = yield call(api.createCost, action.payload);
        console.log('[cost-created]', cost);
        yield put(actions.createCost.createCostSuccess(cost.data));
    } catch (err) {
        console.error(err);
        yield put(actions.createCost.createCostFailure(err));
    }
}
function* updateCost(action) {
    try {
        const updated_cost = yield call(api.updateCost, action.payload);
        console.log('[cost-updated]', updated_cost);
        yield put(actions.updateCost.updateCostSuccess(updated_cost.data));
    } catch (err) {
        console.error(err);
        yield put(actions.updateCost.updateCostFailure(err));
    }
}
function* deleteCost(action) {
    try {
        const delete_cost = yield call(api.deleteCost, action.payload);
        console.log('[cost-deleted]', delete_cost);
        yield put(actions.deleteCost.deleteCostSuccess(delete_cost.data));
    } catch (err) {
        console.error(err);
        yield put(actions.deleteCost.deleteCostFailure(err));
    }
}
function* fetchSchedule(action) {
    try {
        const f_schedule = yield call(api.fetchSchedule);
        yield put(actions.fetchSchedule.fetchScheduleSuccess(f_schedule.data));
    } catch (err) {
        console.error(err);
        yield put(actions.fetchSchedule.fetchScheduleFailure(err));
    }
}
function* updateSchedule(action) {
    try {
        const updated_schedule = yield call(api.updateSchedule, action.payload);
        yield put(actions.updateSchedule.updateScheduleSuccess(updated_schedule.data));
    } catch (err) {
        console.error(err);
        yield put(actions.updateSchedule.updateScheduleFailure(err));
    }
}
function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createSchedule.createScheduleRequest, createSchedule);
    yield takeLatest(actions.createCost.createCostRequest, createCost);
    yield takeLatest(actions.updateCost.updateCostRequest, updateCost);
    yield takeLatest(actions.deleteCost.deleteCostRequest, deleteCost);
    yield takeLatest(actions.fetchSchedule.fetchScheduleRequest, fetchSchedule);
    yield takeLatest(actions.updateSchedule.updateScheduleRequest, updateSchedule);
}
export default mySaga;