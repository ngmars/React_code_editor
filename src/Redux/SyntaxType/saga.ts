import { all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";

export function* changeSyntax(){
    yield takeEvery("CHANGE_SYNTAX_REQUEST",function*({payload}:any){
        //console.log('This is my payload: ',payload)
        yield put({
            type: actions.CHANGE_SYNTAX_SUCCESS,
            syntaxType: payload.syntaxType
        })
    })
}


export default function* rootSaga(){
    yield all([fork(changeSyntax)]);
}