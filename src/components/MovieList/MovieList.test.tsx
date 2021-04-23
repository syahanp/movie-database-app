import { mount } from '../../enzyme';
import MovieList from './index';
import { Provider } from 'react-redux';
import Movie from '../Movie';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([]);

describe('MovieList should render properly', () => {
    const props = {
        title: 'title',
        year: "2019",
        type: 'Movie',
        imdbID: '232323',
        poster: 'link_poster'
    }

    const store = mockStore({})

    const wrapper = mount(
        <Provider store={store}>
            <MovieList />
        </Provider>
    )

    it('should render list of movie', () => {
        expect(wrapper.containsMatchingElement(<Movie {...props} />)).toEqual(true)
    })
})