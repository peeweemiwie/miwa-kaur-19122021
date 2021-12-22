export const FontFamily = {
	montserrat: 'Montserrat, sans-serif',
	PTMono: 'PT Mono, monospace',
	roboto: 'Roboto, sans-serif',
	robotoMono: 'Roboto Mono, monospace',
	Quicksand: 'Quicksand, sans-serif',
};

export const Color = {
	primary: '#27d0ff',
	success: '#22da93',
	warning: '#feb900',
	danger: '#f23557',
	accent: '#e927ff',
	light: '#eee',
	dark: '#1a1a1a',
	white: '#fff',
	black: '#000',
	gray: '#414141',
	lightGray: '#7a7a7a',
	darkGray: '#202124',
	navy: '#031f41',
};

const baseFontSize = 1.6;
export const FontSize = {
	fontXl: baseFontSize * 3 + 'rem',
	fontLg: baseFontSize * 2 + 'rem',
	fontMd: Math.round(baseFontSize * 1.5 * 10) / 10 + 'rem',
	fontReg: baseFontSize + 'rem',
	fontSm: Math.round(baseFontSize * 0.9 * 10) / 10 + 'rem',
	fontXs: Math.round(baseFontSize * 0.8 * 10) / 10 + 'rem',
};

export const Bp = {
	sm: '768px',
};

export const Shadow = {
	shadow1: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1)',
	shadow2: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2)',
	shadow3: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3)',
	shadow4: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.4)',
	shadow5: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5)',
	shadow6: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.6)',
	shadow7: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.7)',
	shadow8: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.8)',
	shadow9: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.9)',
	shadow10: '0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 1)',
};

const baseBorderRadius = 0.4;
export const BorderRadius = {
	brSm: baseBorderRadius + 'rem',
	brMd: baseBorderRadius * 2 + 'rem',
	brLg: baseBorderRadius * 3 + 'rem',
	brXl: baseBorderRadius * 4 + 'rem',
	brRound: '50%',
};
