import actions from './actions';
const initState= {
    loading: null,
    successLink: null,
    errorMessage:null
}

export default function shareableLink(state=initState, action:any){
    switch(action.type){
        case actions.SHARE_LINK_REQUEST:
            return{
                loading:true,
                ...state
            };
        case actions.SHARE_LINK_SUCCESS:
            return{
                loading:false,
                successLink:action.successLink
            };
        case actions.SHARE_LINK_ERROR:
            return{
                loading:false,
                errorMessage:action.errorMessage
            };
        default:
            return state
    }
}
