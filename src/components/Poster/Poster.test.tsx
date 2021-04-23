import { mount } from '../../enzyme';
import Poster from './index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([]);

describe('Poster should render poster image', () => {

    const store = mockStore({})

    const wrapper = mount(
        <Provider store={store}>
            <Poster src="link_to_poster" />
        </Provider>
    )

    it('should mount image', () => {
        expect(wrapper.find('img').exists()).toBe(true)
    })
})