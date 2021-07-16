import {all} from 'redux-saga/effects';
import changeSyntaxSaga from './SyntaxType/saga';
import addCodeSaga from './Codebase/saga';
export default function* rootSaga(getState:any){
    yield all([
    addCodeSaga(),
    changeSyntaxSaga(),
    
    ])
}