import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPrompt(action) {

    try {
        const detailPrompt = yield axios.get(`/api/temp/${action.payload}`)
        console.log (detailPrompt.data)
        yield put({type: 'SET_PROMPT', payload: detailPrompt.data})
    } catch (e) {
        console.log('Error in promptSaga', e);
    }
}

function* promptSaga() {
    yield takeEvery('FETCH_PROMPT', fetchPrompt);
  }

export default promptSaga;

