import { all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";

export function* addCode(){
    yield takeEvery("ADD_CODE_REQUEST",function*({payload}:any){
        console.log('This is my payload: ',payload)
        if(payload.syntaxType=='html'){
            yield put({
                type: actions.ADD_HTML_SUCCESS,
                syntaxType: payload.syntaxType,
                htmlCode: payload.code
            })
        }
        else if(payload.syntaxType=='css'){
            yield put({
                type: actions.ADD_CSS_SUCCESS,
                syntaxType: payload.syntaxType,
                cssCode: payload.code
            })
        }
        else if(payload.syntaxType=='js'){
            yield put({
                type: actions.ADD_JS_SUCCESS,
                syntaxType: payload.syntaxType,
                jsCode: payload.code
            })
        }
        
    })
}


export default function* rootSaga(){
    yield all([fork(addCode)]);
}