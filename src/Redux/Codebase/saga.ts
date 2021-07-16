import { call, all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";
import workerUrl from '../../config/workerUrl';
function ApiGetCode(payload:any){
    let url=workerUrl.url+'?https://pastebin.com/raw/'+payload.link;
    return axios.get(url).then(res=>{
        return{
            data:res.data
        }
    })
    .catch(err=>{
        return{
            errorMessage:err
        }
    })
}

export function* getCode(){
    yield takeEvery("GET_CODE_REQUEST",function*({payload}:any){
        console.log('This is my payload: ',payload)
        
        const {data,errorMessage} =yield call(ApiGetCode,payload) 
        if(!errorMessage){
            yield put({
                type: actions.GET_CODE_SUCCESS,
                htmlCode: data.htmlCode,
                cssCode: data.cssCode,
                jsCode: data.jsCode,
            })
        }else{
            yield put({
                type: actions.GET_CODE_ERROR,
                errorMessage: errorMessage
            })
        }
        
    })
}

export function* addCode(){
    yield takeEvery("ADD_CODE_REQUEST",function*({payload}:any){
        //console.log('This is my payload: ',payload)
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
    yield all([fork(addCode),fork(getCode)]);
}