import { Navigator } from '../../../Navigator';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('login'));

const nav =  (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);
    
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }

export default nav;
