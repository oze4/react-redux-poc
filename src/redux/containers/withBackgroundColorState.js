import { connect } from 'react-redux';
import { mapBackgroundColorStateToProps } from './mapper.js';


export default function withBackgroundColorState(WrappedComponent) {
    return connect(
        mapBackgroundColorStateToProps,
        null,        
    )(WrappedComponent)
 }