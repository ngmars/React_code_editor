const actions = {
    ADD_CODE_REQUEST : "ADD_CODE_REQUEST",
    ADD_HTML_SUCCESS : "ADD_HTML_SUCCESS",
    ADD_CSS_SUCCESS : "ADD_CSS_SUCCESS",
    ADD_JS_SUCCESS : "ADD_JS_SUCCESS",  
    GET_CODE_REQUEST : "GET_CODE_REQUEST",
    GET_CODE_SUCCESS : "GET_CODE_SUCCESS",
    GET_CODE_ERROR : "GET_CODE_ERROR",

    changeSyntax : (syntaxType:any,code:any) =>(
        {
            type:actions.ADD_CODE_REQUEST,
            payload:{syntaxType,code}
        }
    ),

    getCode : (link:any)=>(
        {
            type:actions.GET_CODE_REQUEST,
            payload:{link}
        }
    )
}

export default actions;