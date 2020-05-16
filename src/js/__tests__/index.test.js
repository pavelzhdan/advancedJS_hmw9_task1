/* eslint-disable no-unused-vars */
import Character, { Magician, Daemon } from '../../index';

test('normal attack', () => {
  const zafar = new Magician();
  zafar.attack = 1;

  expect(zafar.attack).toBe(100);
});

test('normal attack with reach 3', () => {
  const zafar = new Magician();
  zafar.attack = 3;

  expect(zafar.attack).toBe(80);
});

test('normal attack with reach 8', () => {
  const zafar = new Magician();
  zafar.attack = 8;

  expect(zafar.attack).toBe(60);
});

test('stoned deamon attack in reach 1', () => {
  const zafar = new Daemon();
  zafar.stoned = 1;

  expect(zafar.stoned).toBe(100);
});

test('stoned deamon attack in reach 2', () => {
  const zafar = new Daemon();
  zafar.stoned = 2;

  expect(zafar.stoned).toBe(85);
});

test('stoned deamon attack in reach 8', () => {
  const zafar = new Daemon();
  zafar.stoned = 8;

  expect(zafar.stoned).toBe(50);
});
