/**
 * Radarr App
 * https://github.com/LetsMakeApps/Radarr
 * @flow
 */

//////////
// Main //
//////////

/////////////////
// Third-party //
/////////////////

////////////
// Custom //
////////////
import TYPE from './MoreHistory.actionType'

//////////
// Init //
//////////
/**
 * [setCurrentPage description]
 * @param  {[type]} currentPage [description]
 * @return {[type]}             [description]
 */
export function setCurrentPage(currentPage) {
  return { type: TYPE.SET_MOREHISTORY_CURRENT_PAGE, payload: currentPage }
}
