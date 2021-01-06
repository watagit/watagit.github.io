import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }

.gatsby-highlight {
  background-color: #2d2d2d;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
  @media screen and (max-width: 1024px) {}
  @media screen and (max-width: 896px) {
    font-size: 10px;
    width: 330px;
  }
  @media screen and (max-width: 480px) {}
}
`;
