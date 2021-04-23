import { shallow } from '../../enzyme';
import SearchBox from '../SearchBox';
import Header from './index';

describe('Header should render properly', () => {
    const wrapper = shallow(<Header/>)

    it('should render SearchBox inside Header', () => {
        expect(wrapper.containsMatchingElement(<SearchBox />)).toEqual(true)
    })
})