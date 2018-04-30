import React from 'react';
import { mount, expect } from '../../test-helper';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Main from './main';

describe('Main component', () => {
    describe('Structure test', () => {
        const mockStore = configureStore();
        let component, store;
        beforeEach(() => {
            const state = {game: {mode: null, gameModes: {CVC: '', PVC: ''}}};
            store = mockStore(state);
            component = mount(<Provider store={store}><BrowserRouter><Main {...state }/></BrowserRouter></Provider>).find(Main);
        });

        it('has the correct class', () => {
            expect(component.find('.main')).to.be.length(1);
        });

        it('has the correct header structure', () => {
            const header = component.find('header');
            const title = header.find('h1');
            const subtitle = header.find('h3');

            expect(header).to.be.length(1);
            expect(title).to.be.length(1);
            expect(subtitle).to.be.length(1);
            expect(title.contains('Rock Paper Scissors')).to.equal(true);
            expect(subtitle.contains('choose your destiny')).to.equal(true);
        });

        it('has the correct section structure', () => {
            const section = component.find('section');
            const gameModes = section.find('div.game-modes');
            expect(section).to.be.length(1);
            expect(gameModes).to.be.length(1);
            expect(gameModes.find('.mode')).to.be.length(2);
            expect(gameModes.find('.divider')).to.be.length(1);
        });

        it('has the correct image elemets', () => {
            const player = component.find('.player-vs-cpu');
            const cpu = component.find('.cpu-vs-cpu');

            expect(player.find('img')).to.be.length(2);
            expect(player.find('img.player')).to.be.length(1);
            expect(player.find('img.cpu')).to.be.length(1);
            expect(cpu.find('img')).to.be.length(2);
            expect(cpu.find('img.cpu')).to.be.length(2);
        });
    });
});