import Rock from '../assets/rock.png';
import Paper from '../assets/paper.png';
import Scissors from '../assets/scissors.png';
import Lizard from '../assets/lizard.png';
import Spock from '../assets/spock.png';

import { outcomes } from './types';

export default {
    [outcomes.ROCK]: Rock,
    [outcomes.PAPER]: Paper,
    [outcomes.SCISSORS]: Scissors,
    [outcomes.LIZARD]: Lizard,
    [outcomes.SPOCK]: Spock
}