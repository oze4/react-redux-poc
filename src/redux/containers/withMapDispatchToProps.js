import { connect } from 'react-redux';
import mapDispatchToProps from './mapDispatchToProps.js';


export default function withMapDispatchToProps(WrappedComponent) {
   return connect(
       null,
       mapDispatchToProps,
   )(WrappedComponent)
}