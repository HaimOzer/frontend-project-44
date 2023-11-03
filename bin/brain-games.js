#!/usr/bin/env node

import greetAndGetName from '../src/cli.js';
import { playEvenGame from } './games/brain-even.js';
import { playCalcGame } from './games/brain-calc.js';
import { playGCD } from './games/brain-gcd.js';
import { playProgressionGame } from './games/brain-progression.js';
import { playBrainPrime } from './games/brain-prime.js';

const name = greetAndGetName();

playEvenGame(name);
playCalcGame(name);
playGCD(name);
playProgressionGame(name);
playBrainPrime(name);
