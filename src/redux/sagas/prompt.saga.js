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

/*
function* specificMovieDetail(action) {
    try {
      const detailGet = yield axios.get(`/api/movies/details/${action.payload}`); //requesting specific movie id with payload
      console.log(detailGet.data)
      yield put({type: 'SET_DETAILS', payload: detailGet.data}) // sending to reducer

    } catch (e) {
      console.log('specificMovieDetail error', e);
    }
}
*/