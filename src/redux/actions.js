/*
*
* actions by wuwc on 2017-12-21
*
* */
import * as actionTypes from './actionTypes';

export const isShowCoverPage = (isShowCoverPage) => {
    return {type: actionTypes.IS_SHOW_COVER_PAGE, isShowCoverPage}
};

export const isShowMenu = (isShowMenu) => {
    return {type: actionTypes.IS_SHOW_MENU, isShowMenu}
};

export const isPlay = (isPlay) => {
    return {type: actionTypes.IS_PLAY, isPlay}
};
