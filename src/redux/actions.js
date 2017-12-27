import * as actionTypes from './actionTypes';

export const isShowCoverPage = (isShowCoverPage) => {
    return {type: actionTypes.IS_SHOW_COVER_PAGE, isShowCoverPage}
};

export const isShowMenu = (isShowMenu) => {
    return {type: actionTypes.IS_SHOW_MENU, isShowMenu}
};

export const isLogin = (isLogin) => {
    return {type: actionTypes.IS_LOGIN, isLogin}
};


export const incrementAction = (num) => {
    return {type: actionTypes.INCREMENT, value: num}
};

export const decrementAction = (num) => {
    return {type: actionTypes.DECREMENT, value: num}
};

export const isPlay = (isPlay) => {
    return {type: actionTypes.IS_PLAY, isPlay}
};
