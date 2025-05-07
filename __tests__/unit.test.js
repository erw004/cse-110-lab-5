// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is phone number #1', () => {
  expect(isPhoneNumber('925-219-7771')).toBe(true);
});

test('is phone number #2', () => {
  expect(isPhoneNumber('(111) 222-3333')).toBe(true);
});

test('is not phone number #1', () => {
  expect(isPhoneNumber('925 219 7771')).toBe(false);
});

test('is not phone number #2', () => {
  expect(isPhoneNumber('111 222 3333')).toBe(false);
});

test('is email #1', () => {
  expect(isEmail('eric@poop.com')).toBe(true);
});

test('is email #2', () => {
  expect(isEmail('poopmail@mail.com')).toBe(true);
});

test('is not email #1', () => {
  expect(isEmail('ericATpoop.com')).toBe(false);
});

test('is not email #2', () => {
  expect(isEmail('eric.com')).toBe(false);
});

test('is strong password #1', () => {
  expect(isStrongPassword('eRiC_passW0rd')).toBe(true);
});

test('is strong password #2', () => {
  expect(isStrongPassword('Th1s3RiC_W0rd')).toBe(true);
});

test('is not strong password #1', () => {
  expect(isStrongPassword('3RiC_passW0rd')).toBe(false);
});

test('is not strong password #2', () => {
  expect(isStrongPassword('eR!C_passW0rd')).toBe(false);
});

test('is date #1', () => {
  expect(isDate('5/5/2005')).toBe(true);
});

test('is date #2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('is not date #1', () => {
  expect(isDate('112/31/1999')).toBe(false);
});

test('is not date #2', () => {
  expect(isDate('1-30-1999')).toBe(false);
});

test('is hex color #1', () => {
  expect(isHexColor('#333')).toBe(true);
});

test('is hex color #2', () => {
  expect(isHexColor('#f32066')).toBe(true);
});

test('is not hex color #1', () => {
  expect(isHexColor('gff')).toBe(false);
});

test('is not hex color #1', () => {
  expect(isHexColor('#3777383')).toBe(false);
});



