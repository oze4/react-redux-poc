import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps.js';


export default function withMapStateToProps(WrappedComponent) {
    return connect(
        mapStateToProps,
        null,        
    )(WrappedComponent)
 }