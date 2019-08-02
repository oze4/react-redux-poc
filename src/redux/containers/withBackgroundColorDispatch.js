import { connect } from 'react-redux';
import { mapBackgroundColorDispatchToProps } from './mapper.js';


export default function withBackgroundColorDispatch(WrappedComponent) {
   return connect(
       null,
       mapBackgroundColorDispatchToProps,
   )(WrappedComponent);
}