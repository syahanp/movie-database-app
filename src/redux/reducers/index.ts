import { combineReducers } from 'redux';
import { SearchQuery } from './SearchQuery';
import { PosterModal } from './PosterModal';

export default combineReducers({
    searchQuery: SearchQuery,
    posterModal: PosterModal
})