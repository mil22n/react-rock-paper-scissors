import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, expect } from '../../test-helper';
import Main from './main';

describe('Main component', () => {

    describe('Smoke test', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Main />, div);
        });
    });

    describe('Structure test', () => {
        let component;
        beforeEach(() => {
            component = shallow(<Main />);
        });

        it('has the correct class', () => {
            expect(component.find('.class')).to.exist;
        });

        it('has the correct header', () => {
            const header = component.find('header');
            const title = header.find('h1.title');
            const subtitle = header.find('h3.subtitle');

            expect(header).to.be.length(1);
            expect(title).to.be.length(1);
            expect(title.contains('Rock Paper Scissors')).to.equal(true);
            expect(subtitle).to.be.length(1);
            expect(subtitle.contains('choose your destiny')).to.equal(true);
        });

        it('has the correct section', () => {
            const section = component.find('section');
            expect(section).to.exist;
        });
    });
});