const actions = {
    SHARE_LINK_REQUEST : "SHARE_LINK_REQUEST",
    SHARE_LINK_SUCCESS : "SHARE_LINK_SUCCESS",
    SHARE_LINK_ERROR : "SHARE_LINK_ERROR",


    shareLink : (code:any) =>(
        {
            type:actions.SHARE_LINK_REQUEST,
            payload:{code}
        }
    )
}

export default actions;