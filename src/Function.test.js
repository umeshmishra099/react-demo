import { render, screen } from '@testing-library/react';
import {timesTwo} from './Function';

test('Multiply by two', () => {
  expect(timesTwo(4)).toBe(8);
});
