/*
*
* reducers by wuwc on 2017-12-21
*
* */
import * as actionTypes from './actionTypes';

const initialState = {
    isShowCoverPage: false,
    isShowMenu: false,
    isPlay: true
};

/* a状态的reducer, 通过此reducer改变a的状态 */
const a = (isShowCoverPage = initialState.isShowCoverPage, action) => {
    switch (action.type) {
        case actionTypes.IS_SHOW_COVER_PAGE:
            return action.isShowCoverPage;
        default:
            return isShowCoverPage;
    }
};

/* b状态的reducer, 通过此reducer改变b的状态 */
const b = (isShowMenu = initialState.isShowMenu, action) => {
    switch (action.type) {
        case actionTypes.IS_SHOW_MENU:
            return action.isShowMenu;
        default:
            return isShowMenu;
    }
};

const isPlay = (isPlay = initialState.isPlay, action) => {
    switch (action.type) {
        case actionTypes.IS_PLAY:
            return action.isPlay;
        default:
            return isPlay;
    }
};

export default {a, b, isPlay}


