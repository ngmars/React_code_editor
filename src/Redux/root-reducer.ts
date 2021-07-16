import { combineReducers } from 'redux';
import changeSyntax from '../Redux/SyntaxType/reducer';
import addCode from '../Redux/Codebase/reducer';
import shareableLink from '../Redux/Shareable/reducer'
export default combineReducers({
    addCode,
    changeSyntax,
    shareableLink
});