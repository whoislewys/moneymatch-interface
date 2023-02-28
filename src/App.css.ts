import { style, globalStyle } from '@vanilla-extract/css';
import { violetDark, violetDarkA } from '@radix-ui/colors';

globalStyle('p', {
  margin: 0,
  padding: 0,
  border: 0,
});

globalStyle('html', {
  height: '100%',
  margin: 0,
});

globalStyle('body', {
  backgroundColor: violetDark.violet1,
  color: 'white',
  height: '100%',
  margin: 0,
});

globalStyle('p', {
  backgroundColor: violetDark.violet1,
  color: 'white',
  height: '100%',
  margin: 0,
});

globalStyle('#root', {
  height: '100%',
  display: 'block',
  margin: 0,
});

// override rainbow kit provider's style
globalStyle('div[data-rk]', {
  // height: '100%',
  display: 'block',
});

export const Main = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
});

export const Header = style({
  height: '69px',
  paddingLeft: '4rem',
  paddingRight: '4rem',
  backgroundColor: violetDark.violet1,
});

export const Nav = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const LeftNav = style({
  color: 'white',
});

export const HeaderSeparator = style({
  height: '2px',
  width: '100%',
  backgroundColor: violetDarkA.violetA5,
});

export const Section = style({
  paddingLeft: '4rem',
  paddingRight: '4rem',
  paddingBottom: '1rem',
});

export const Players = style({
  display: 'flex',
  width: '80%',
  height: '100%',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'space-around',
});

export const PlayerBox = style({
  width: '30%',
  backgroundColor: violetDark.violet3,
});

export const PlayerSeparatorContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '10%',
});

export const PlayerSeparator = style({
  width: '2px',
  backgroundColor: violetDarkA.violetA5,
});
