import { mount } from '../../enzyme';
import SearchBox from './index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([]);

describe('SearchBox should render poster image', () => {

    const store = mockStore({})

    const wrapper = mount(
        <Provider store={store}>
            <SearchBox />
        </Provider>
    )

    it('should mount input', () => {
        expect(wrapper.find('input').exists()).toBe(true)
    })
})