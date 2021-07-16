const actions = {
    ADD_CODE_REQUEST : "ADD_CODE_REQUEST",
    ADD_HTML_SUCCESS : "ADD_HTML_SUCCESS",
    ADD_CSS_SUCCESS : "ADD_CSS_SUCCESS",
    ADD_JS_SUCCESS : "ADD_JS_SUCCESS",  


    changeSyntax : (syntaxType:any,code:any) =>(
        {
            type:actions.ADD_CODE_REQUEST,
            payload:{syntaxType,code}
        }
    )
}

export default actions;