import { mount } from '../../enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './index';

describe('Button should render properly', () => {
    const wrapper = mount(
        <Router>
            <Button to='/'>
                <div className='children'>test</div>
            </Button>
        </Router>
    )

    it('should render anchor tag', () => {
        expect(wrapper.find('a').exists()).toBe(true)
    })

    it('should render div with className children', () => {
        expect(wrapper.find('div.children').exists()).toBe(true)
    })
})