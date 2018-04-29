import React from 'react';
import { shallow, expect } from '../../test-helper';

import Player from './player';

describe('Player component', () => {
    describe('Structure test', () => {
        let component;
        const name = 'playerName', image = 'imageSrc';
        const props = { name, image };

        beforeEach(() => {
            component = shallow(<Player {...props} />);
        });

        it('has the correct structure', () => {
            const player = component.find('.player');
            const playArea = player.find('.play-area');

            expect(playArea).to.be.length(1);
            expect(playArea.find('img')).to.be.length(1);
            expect(player.find('.player-name')).to.be.length(1);
        });

        it('has rendered correct content', () => {
            // expect(component.find('img').prop('src')).to.equal(image);
            expect(component.find('.player-name').contains(name)).to.equal(true);
        });
    });
});