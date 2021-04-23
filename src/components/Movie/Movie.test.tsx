import { mount } from '../../enzyme';
import Movie from './index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([]);

describe('Movie should render properly', () => {
    const props = {
        title: 'title',
        year: "2019",
        type: 'Movie',
        imdbID: '232323',
        poster: 'link_poster'
    }

    const store = mockStore({posterModal: "link_to_poster"})

    const wrapper = mount(
        <Provider store={store}>
            <Router>
                <Movie {...props} />
            </Router>
        </Provider>
    )

    it('should render Link to movie page', () => {
        expect(wrapper.find('a').exists()).toBe(true)
    })
})