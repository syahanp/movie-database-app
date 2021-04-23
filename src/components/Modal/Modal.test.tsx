import { mount } from '../../enzyme';
import Modal from './index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([]);

describe('Modal should render children', () => {

    const store = mockStore({})

    const wrapper = mount(
        <Provider store={store}>
            <Modal />
        </Provider>
    )

    it('should mount image inside Modal', () => {
        expect(wrapper.find('img').exists()).toBe(true)
    })
})