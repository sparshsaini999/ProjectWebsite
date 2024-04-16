import { createGlobalStyle } from 'styled-components';
import { THEME } from './constants/AppConst';

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	
	body {
		scroll-behavior: smooth;
		font-family: "Poppins", sans-serif;
	}

	// RESET CSS
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	figure {
	margin: 0;
	padding: 0;
	}
	

	a {
    color: inherit;
    text-decoration: none;
	}

	img {
    display: block;
	}

	ul {
    list-style: none;
    margin: 0;
    padding: 0;
	}

	input {
    accent-color: ${THEME?.primaryColor};
	}

	.ant-btn-primary {
		color: ${THEME?.primaryColorContrast} !important;
	}
	// /RESET CSS

	// SCROLLBAR CSS
	::-webkit-scrollbar {
    width: 6px;
    height: 6px;
	}

	::-webkit-scrollbar-track {
    background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 50px;
	}

	::-webkit-scrollbar-thumb:hover {
    background: #999;
	}
	// /SCROLLBAR CSS

	// GLOBAL CSS CLASSES
	.max-container {
    width: ${THEME?.width};
    margin: 0 auto;
    max-width: ${THEME?.maxWidth};
	}

	.text-primary {
		color: ${THEME?.primaryColor} !important;
	}

	.horizontal-divider {
		border-top: 1px solid ${THEME?.dividerColor};
	}

	.swiper-pagination-bullet-active {
		background-color: ${THEME?.primaryColor};
	}
	// /GLOBAL CSS CLASSES

	// ANIMATION CSS
	@keyframes fadeIn {
    from {
			opacity: 0;
			transform: translateY(20px);
    }
    to {
			opacity: 1;
			transform: translateY(0);
    }
	}
	// /ANIMATION CSS
`;
