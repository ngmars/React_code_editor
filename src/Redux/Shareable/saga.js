import {call, all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";
import workerUrl from '../../config/workerUrl';


export function ApiGenLink(payload){
    let codeSend = JSON.stringify(payload.code)
    var formdata = new FormData();
    formdata.set("api_dev_key", workerUrl.devToken);
    formdata.set("api_paste_code", codeSend);
    formdata.set("api_paste_private", "0");
    formdata.set("api_paste_name", "test.json");
    formdata.set("api_paste_expire_date", "1W");
    formdata.set("api_paste_format", "json");
    formdata.set("api_option", "paste");
  
   
    var config = {
        method: 'post',
        url: workerUrl.url+'?https://pastebin.com/api/api_post.php',
        headers: { 
          'Origin': 'Access-Control-Allow-Origin', 
        },
        data : formdata
      };
        return axios(config).then((res)=>{
            console.log(res.data.slice(21))
            return({
                successLink: res?.data?.slice(21)
            })
        })
        .catch(err=>{
            return {
                errorMessage:err
            }
        })
    }


export function* genLink(){
    yield takeEvery("SHARE_LINK_REQUEST",function*({payload}){
        console.log('This is my payload: ',payload)
        
        const {successLink,errorMessage} =yield call(ApiGenLink,payload) 
        if(!errorMessage){
            yield put({
                type: actions.SHARE_LINK_SUCCESS,
                successLink: successLink
            })
        }else{
            yield put({
                type: actions.SHARE_LINK_ERROR,
                errorMessage: errorMessage
            })
        }
        
    })
}


export default function* rootSaga(){
    yield all([fork(genLink)]);
}