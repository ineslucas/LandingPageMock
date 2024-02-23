import styled from 'styled-components';
// import StarBaloon from '/brand_assets/star_baloon.png';
import EmptyBaloon from '/brand_assets/empty_baloon.png';
import DialogBaloonRed from '/brand_assets/dialog_baloon_red.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const FeedContainer = styled.div`
  max-width: 800px;
  margin-left: 30px;
  overflow-y: auto;
`;

const UpdateContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr; // fr unit = fits content dynamically
  gap: 20px;
  margin-bottom: 20px;

  & img {
    width: 60px;
    height: auto;
  }
`

const NewProposal = styled.div`
  background-color: ${props => props.theme.lightPurple};
  border-radius: 10px;
  padding: 15px;
  width: 80%;
  box-shadow:
    rgba(255, 255, 255, 0.2) 0px 4px 12px,
    rgba(204, 204, 255, 0.2) 0px 8px 16px; // Visible against dark purple

  & p {
    margin: 0;
    color: ${props => props.theme.darkBlue};
    font-weight: 14px;
    text-align: left;
  }
`;

const NewProposalTextAlert = styled.div`
  display: flex;
  align-items: center; // vertical centering
  gap: 10px;

  & p {
    color: ${props => props.theme.red};
    font-weight: bold;
    margin: 0;
    flex: 1; // takes up remaining space
  }
`;

const RedIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.red};
`;

const NewProposalInnerContainer = styled.div`
  background-color: ${props => props.theme.strongPurple};
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0 0 10px;

  & h3 {
    color: white;
    text-align: left;
    margin-top: 0;
  }

  & p {
    color: white;
  }
`;


export default function Updates()
{
  return <>
    <FeedContainer>
      <UpdateContainer>
        <img src={EmptyBaloon} style={{scale:"0.8"}} alt="Yellow Dialogue Baloon" />
        <NewProposal>
          <p>Carolina Santos e mais 3 pessoas gostaram de <b>Bolsa de Emprego Jovem Qualificado</b></p>
        </NewProposal>
      </UpdateContainer>

      <UpdateContainer>
        <img src={DialogBaloonRed} alt="empty ballon"/>
        <NewProposal>
          <NewProposalTextAlert>
            <p>Nova Proposta</p>
            <RedIcon icon={faThumbsUp} />
            <RedIcon icon={faComment} />
          </NewProposalTextAlert>

          <NewProposalInnerContainer>
            <h3>Concurso Talentos</h3>
            <p>Uma solução que poderia dar espaço para os artistas se
                apresentarem era a criação de um concurso municipal, uma
                espécie de Sesimbra Criativa...</p>
          </NewProposalInnerContainer>
        </NewProposal>
      </UpdateContainer>

      <UpdateContainer>
        <img src={EmptyBaloon} style={{scale:"0.8"}} alt="Red Dialogue Baloon" />
        <NewProposal>
          <p>Sara Matos e mais 3 pessoas gostaram de <b>Comunicação Cineteatro</b></p>
        </NewProposal>
      </UpdateContainer>
    </FeedContainer>
  </>
}
