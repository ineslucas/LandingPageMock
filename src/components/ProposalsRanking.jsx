import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    "Proposta": "Bolsa de Emprego Jovem Qualificado",
    Votos: "4",
    Ranking: "1º"
  },
  {
    "Proposta": "Santos no Calvário",
    Votos: "3",
    Ranking: "2º"
  },
  {
    "Proposta": "Comunicação Cineteatro",
    Votos: "4",
    Ranking: "3º"
  }
];

const ProposalsContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  // max-width: 40vw;
  min-width: 70px;
  padding: 25px;
  padding-top: 30px;
  z-index: 10;
  background-color: ${props => props.theme.lightPurple};
  border-radius: 0px 0px 0px 50px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 8px 24px, rgba(204, 204, 255, 0.2) 0px 16px 32px; // Visible against dark purple

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: 0px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const ProposalsTable = styled.table`
  border: none;
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border-spacing: 5px 10px;

  td, th { // table cells (td) // headers (th)
    border: none;
    padding: 8px 8px 8px 0px; // top right bottom left
  }

  td {
    border-bottom: 1px solid ${props => props.theme.strongPurple};
  }
`;

const AddProposalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  border-radius: 50px;

  & h3 {
    color: ${props => props.theme.strongPurple};
    transition: color 0.3s ease, transform 0.3s ease; // for when hovering
  }

  // Prepping for hover effect
  background-color: transparent; // Starting off as transparent
  background-image: linear-gradient(to left, ${props => props.theme.strongPurple} 0%, ${props => props.theme.strongPurple} 100%);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 0% 100%;
  transition: background-size 0.5s ease-out;

  &:hover {
    background-size: 100% 100%; // Full width
    & h3 {
      color: ${props => props.theme.lightPurple};
      transform: translateX(14px); // creating an artificial margin & preserving alignment at all times
    }
  }
`;

const AddProposalButton = styled.button`
  background-color: ${props => props.theme.strongPurple};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;

  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

export default function ProposalsFeed()
{
  return <>
    <ProposalsContainer>
      <HeaderContainer>
        <h2>Ranking de propostas</h2>
        <FontAwesomeIcon icon={faSquareUpRight}/>
      </HeaderContainer>

      <ProposalsTable>
        <thead>
          <tr>
            <th>Proposta</th>
            <th>Votos</th>
            <th>Ranking</th>
          </tr>
        </thead>

        {data.map((proposal, index) => {
          // <tr>: table row element
          return <tr key={index}>
            <td>{proposal.Proposta}</td>
            <td>{proposal.Votos}</td>
            <td>{proposal.Ranking}</td>
          </tr>
        })}
      </ProposalsTable>
      <AddProposalContainer>
        <h3>Quero adicionar a minha proposta</h3>
        <AddProposalButton>
          <FontAwesomeIcon icon={faPlus} style={{fontSize: '30px'}}/>
        </AddProposalButton>
      </AddProposalContainer>

    </ProposalsContainer>
  </>
}
