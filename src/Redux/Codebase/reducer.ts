import actions from './actions';
const initState= {
    loading: null,
    codeLoad:null,
    htmlCode: null,
    cssCode:null,
    jsCode:null,
    gotHtmlCode: null,
    gotCssCode:null,
    gotJsCode:null
}

export default function addCode(state=initState, action:any){
    switch(action.type){
        case actions.ADD_CODE_REQUEST:
            return{
                loading:true,
                ...state
            };
        case actions.ADD_HTML_SUCCESS:
            //console.log('This is action html: ',action)
                return{
                    ...state,
                    loading:false,
                    htmlCode:action.htmlCode,
                    
                };

        case actions.ADD_CSS_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    cssCode:action.cssCode
                };
            
        case actions.ADD_JS_SUCCESS:
                //console.log('This is action: js',action)
                return{
                    ...state,
                    loading:false,
                    jsCode:action.jsCode
                };
        case action.GET_CODE_REQUEST:
            return{
                ...state,
                codeLoad:true,
            }
        case actions.GET_CODE_SUCCESS:
            //console.log('This is action: js',action)
            return{
                ...state,
                codeLoad:false,
                gotJsCode:action.jsCode,
                gotHtmlCode:action.htmlCode,
                gotCssCode:action.cssCode
            };
        
        default:
            return state
    }
}