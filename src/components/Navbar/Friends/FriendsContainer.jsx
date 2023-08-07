import Friends from "./Friends";
import { connect } from 'react-redux';

const mapStateToProps = state => ({sidebar: state.sidebar});
const mapDispatchToProps = dispatch => ({});

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;