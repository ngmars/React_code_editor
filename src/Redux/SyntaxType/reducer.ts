import actions from './actions';
const initState= {
    loading: null,
    syntaxType: 'html'
}

export default function changeSyntaxType(state=initState, action:any){
    switch(action.type){
        case actions.CHANGE_SYNTAX_REQUEST:
            return{
                loading:true,
                ...state
            };
        case actions.CHANGE_SYNTAX_SUCCESS:
            return{
                loading:false,
                syntaxType:action.syntaxType
            };
        default:
            return state
    }
}
