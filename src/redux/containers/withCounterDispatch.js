import { connect } from 'react-redux';
import { mapCounterDispatchToProps } from './mapper.js';


export default function withCounterDispatch(WrappedComponent) {
   return connect(
       null,
       mapCounterDispatchToProps,
   )(WrappedComponent)
}