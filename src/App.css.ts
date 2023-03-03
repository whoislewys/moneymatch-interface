import { globalStyle, style } from '@vanilla-extract/css';
import { grassDark, grayDark, limeDark, mauveDark, violetDark, violetDarkA } from '@radix-ui/colors';

// Reset
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

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
  padding: 0,
  border: 0,
  fontFamily: 'Rubik, sans-serif'
});

globalStyle('h1', {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '2.25rem',
  fontFamily: 'Rubik Puddles',
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
  display: 'flex',
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
  width: 'calc(60% + 2rem)',
  height: '100%',
  alignSelf: 'center',
  justifyContent: 'space-between',
  marginTop: '2rem',
});

export const PlayerSeparatorContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const PlayerSeparator = style({
  width: '2px',
  backgroundColor: violetDarkA.violetA5,
});

export const LoadingContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '80vh',
});

export const PlayerBox = style({
  width: '30%',
  padding: '2rem',
  borderRadius: '1rem',
  background: mauveDark.mauve3,
});

export const MoneyMatchButton = style({
  height: '2.5rem',
  width: '12rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  background: grassDark.grass9,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '1rem',
  border: 'none',
  ':disabled': {
    background: grayDark.gray8,
    color: grayDark.gray9,
  }
});

export const TextInputStyle = style({
  width: '15rem',
  fontSize: '1.5rem',
  padding: '.25rem',
  backgroundColor: mauveDark.mauve12,
  border: 'none',
  borderRadius: '.5rem',
 ':disabled': {
    background: grayDark.gray8,
    color: grayDark.gray9,
  }
});

export const InstructionsCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '36rem',
  alignSelf: 'center',
  background: mauveDark.mauve3,
  borderRadius: '1rem',
  padding: '1rem',
})
