import {connect} from "react-redux"
import {isShowCoverPage, isShowMenu} from "../redux/actions"
import IndexComponent from '../components/index/Index';


const mapStateToProps = (state) => ({
    isShowCoverPage: state.a,
    isShowMenu: state.b
});


const mapDispatchToProps = (dispatch) => ({
    showCoverPage: (bool) => {
        dispatch(isShowCoverPage(bool));
    },
    showMenu: (bool) => {
        dispatch(isShowMenu(bool));
    }
});

//将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);