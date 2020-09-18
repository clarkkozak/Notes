import { combineReducers } from 'redux'
import bugsReducers from './bugs' ;
import projectReducers from './projects';
import memberReducers from './members';

export default combineReducers({
  bugs: bugsReducers,
  projects: projectReducers,
  members: memberReducers,
})