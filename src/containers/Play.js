import {connect} from "react-redux";
import PlayComponent from '../components/play/Play';
import {isPlay} from "../redux/actions";

const mapStateToProps = (state) => ({
    isPlay: state.isPlay
});

const mapDispatchToProps = (dispatch) => ({
    onChangPlayStatus: (bool) => {
        dispatch(isPlay(bool));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayComponent);