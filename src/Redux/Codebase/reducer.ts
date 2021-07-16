import actions from './actions';
const initState= {
    loading: null,
    htmlCode: null,
    cssCode:null,
    jsCode:null
}

export default function addCode(state=initState, action:any){
    switch(action.type){
        case actions.ADD_CODE_REQUEST:
            return{
                loading:true,
                ...state
            };
        case actions.ADD_HTML_SUCCESS:
            console.log('This is action html: ',action)
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
                console.log('This is action: js',action)
                return{
                    ...state,
                    loading:false,
                    jsCode:action.jsCode
                };
        
        default:
            return state
    }
}