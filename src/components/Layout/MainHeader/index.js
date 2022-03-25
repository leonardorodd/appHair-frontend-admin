import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Profile } from './styles';
import Dropdown from '../../Dropdown';
import ProfilePhoto from '../../../assets/img/profile.jpg';

const MainHeader = () => {
  const { user } = useSelector(state => state.auth);

  const profileMenu = [
    {
      title: 'Perfil',
      link: '/profile',
      externalLink: false,
    },
    {
      title: 'Teste1',
      link: '',
      externalLink: false,
    },
    {
      title: 'Teste2',
      link: '',
      externalLink: false,
    },
  ];

  return (
    <Container>
      {/*             <Toggle />
       */}
      {/*  <button className="toggleMenu" type="button">
                <MdMenu size={22} />
            </button> */}
      <div />
      <Profile>
        {/*                 <BsPeopleCircle size={25} />
         */}
        <Dropdown title={user && user.nome} options={profileMenu} />
        <img src={ProfilePhoto} alt="profile" />
      </Profile>
      {/* <Profile>
                <Welcome>Olá, Anderson.</Welcome>
            </Profile> */}
    </Container>
  );
};

export default MainHeader;
