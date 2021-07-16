const actions = {
    CHANGE_SYNTAX_REQUEST : "CHANGE_SYNTAX_REQUEST",
    CHANGE_SYNTAX_SUCCESS : "CHANGE_SYNTAX_SUCCESS",

    changeSyntax : (syntaxType:any) =>(
        {
            type:actions.CHANGE_SYNTAX_REQUEST,
            payload:{syntaxType}
        }
    )
}

export default actions;