import { shallow } from '../../enzyme';
import Container from './index';

describe('Container should render children', () => {
    const wrapper = shallow(
        <Container>
            <div className='child' />
        </Container>
    )

    it('should render div inside Container', () => {
        expect(wrapper.find('.child').length).toEqual(1)
    })
})