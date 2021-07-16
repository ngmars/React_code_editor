import {all} from 'redux-saga/effects';
import changeSyntaxSaga from './SyntaxType/saga';
import addCodeSaga from './Codebase/saga';
import generateLink from './Shareable/saga.js';
export default function* rootSaga(getState:any){
    yield all([
    addCodeSaga(),
    changeSyntaxSaga(),
    generateLink(),
    ])
}