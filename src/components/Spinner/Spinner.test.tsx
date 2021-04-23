import { mount } from '../../enzyme';
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from './index';

describe('Spinner should render properly', () => {
    const wrapper = mount(<Spinner/>)

    it('should render ClipLoader component', () => {
        expect(wrapper.containsMatchingElement(<ClipLoader />)).toEqual(true)
    })
})