import { connect } from 'react-redux';
import { mapCounterStateToProps } from './mapper.js';


export default function withCounterState(WrappedComponent) {
    return connect(
        mapCounterStateToProps,
        null,        
    )(WrappedComponent)
 }