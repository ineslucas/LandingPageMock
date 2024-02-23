{/* In a future scenario, these news would be fetched directly from the city hall's website OR other user generated content alternatives */}

import styled from 'styled-components';
import NewsPhoto1 from '/news_images/news_1.jpeg';
import NewsPhoto2 from '/news_images/news_2.png';
import NewsPhoto3 from '/news_images/news_3.jpeg';
import NewsPhoto4 from '/news_images/news_4.jpeg';
import NewsPhoto5 from '/news_images/news_5.png';

const size = {
  width: '130px',
  height: '130px',
};


const AllNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(${size.width} + 22px));
  grid-template-rows: repeat(3, auto);
  gap: 10px;
`;

const NewsStory = styled.div`
  // Background positioning
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;

  // Own sizing
  aspect-ratio: 1 / 1;
  width: ${size.width};
  height: ${size.height};
  border: 2px solid ${props => props.theme.strongYellow};
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;

  position: relative; /* For hover effect*/

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${props => props.theme.strongYellow};
  }

  p {
    position: relative;
    margin: 0;
    z-index: 4;
    display: none;
    color: ${props => props.theme.darkBlue};
  }

  &:hover p {
    // Keeping text visible on hover & centered
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const Placeholder = styled.div` // Invisible placeholder to keep the grid composition whilst keeping aesthetic negative space
  width: ${size.width};
  height: ${size.height};
  background-color: transparent;
  border: none;
`;

export default function News()
{
  return <>
    <AllNewsContainer>
      <NewsStory bgImage={NewsPhoto1}>
        <p>Repavimentação da Rua Gil Vicente: Trânsito condicionado</p>
      </NewsStory>
      <NewsStory bgImage={NewsPhoto2}>
        <p>Sesimbra recordista em capturas de pescado em 2023 </p>
      </NewsStory>
      <NewsStory bgImage={NewsPhoto3}>
        <p>Reformulação de coletor de águas pluviais</p>
      </NewsStory>
      <NewsStory bgImage={NewsPhoto4}>
        <p>Requalificação de canteiros na Rua da Paz</p>
      </NewsStory>
      <Placeholder />
      <NewsStory bgImage={NewsPhoto5}>
        <p>Ordem de trabalhos da reunião ordinária de Câmara de 21 de fevereiro</p>
      </NewsStory>
    </AllNewsContainer>
  </>
}
