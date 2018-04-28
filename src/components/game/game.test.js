import React from 'react';
import { mount, expect } from '../../test-helper';
import configureStore from 'redux-mock-store';

import Game from './game';

describe('Game component', () => {
    describe('Structure test', () => {
        let component, store;
        beforeEach(() => {
            store = configureStore()({ game: {}});
            component = mount(<Game store={store}/>);
        });

        it('has the correct class', () => {
            expect(component.find('.game')).to.be.length(1);
        });

        it('has the correct header structure', () => {
            const header = component.find('header');
            const title = header.find('h1');

            expect(header).to.be.length(1);
            expect(title).to.be.length(1);
            expect(title.contains('Rock Paper Scissors')).to.equal(true);
        });

        it('has the correct section structure', () => {
            const section = component.find('section');
            expect(section).to.be.length(1);
            expect(section.find('.player-one')).to.be.length(1);
            expect(section.find('.score')).to.be.length(1);
            expect(section.find('.player-two')).to.be.length(1);
        });
    });
});