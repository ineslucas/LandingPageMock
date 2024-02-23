import styled from 'styled-components';
import IconMyPolis from '/logo_purple.png';
import Avatar from '/purple_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCheckToSlot, faTrophy, faQuestion, faBell } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px 30px 40px;
  border-radius: 45px;
  width: 20px;
  min-height: 80%;
  height: 84vh;
  background-color: ${props => props.theme.lightPurple};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 11;

  img {
    height: auto;
    width: 60px;
    aspect-ratio: auto 1 / 1;
  }
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${props => props.theme.strongPurple};
`;

export default function Navigation()
{
  return <>
    <NavContainer>
      <img src={Avatar} alt="Avatar" />

      <NavItemContainer>
        <StyledIcon icon={faMagnifyingGlass} />
        <StyledIcon icon={faCheckToSlot} />
        <StyledIcon icon={faTrophy} />
        <StyledIcon icon={faQuestion} />
        <StyledIcon icon={faBell} />
      </NavItemContainer>

      <img src={IconMyPolis} alt="My Polis Logo" />
    </NavContainer>
  </>
}
