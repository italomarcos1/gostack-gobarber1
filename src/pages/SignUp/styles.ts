import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; /** total da parte visível*/

  display: flex; /** flex poe um do lado do outro */
  align-items: stretch; /** esses itens terao o tamanho total da pagina, height 100vh */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center; /**justify center + align center */

  width: 100%; /** ocupa o maximo que der */
  max-width: 700px; /** nunca reduz do conteudo e não passa de 700 */
`;

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px);
  }
  to{
    opacity:1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  place-content: center; /**justify center+ align center */

  width: 100%; /** ocupa o maximo que der */
  max-width: 700px; /** nunca reduz do conteudo e não passa de 700 */

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: block;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /** flexivel, ocupa todo o espaço menos os 700px */
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover; /** cobre o tamanho do que tem sobrando*/
`;

// -sem o cover, se a imagem for menor, não ocupa o espaço todo
// -com width 100% e max-width e flex 1, a imagem eh responsiva até sumir,
// deixando apenas o content.
// -
