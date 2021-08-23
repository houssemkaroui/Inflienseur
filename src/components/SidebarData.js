import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Acceuil',
    path: '/Admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'ConfirmationCampagnes',
    path: '/ConfirmationCampagnes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'ConfirmationPlateforme',
    path: '/ConfirmationPlateforme',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Campagnes',
    path: '/Campagnes',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Influenceurs',
    path: '/Influenceurs',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Paiements',
    path: '/Paiements',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];





export const SidebarDataVendeur = [
  {
    title: 'Acceuil',
    path: '/Vendeur',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'ListeInfluenceurs',
    path: '/ListeInfluenceurs',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'CampagnesVendeur',
    path: '/CampagnesVendeur',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
];





export const SidebarDataInfliensuer = [
  {
    title: 'Acceuil',
    path: '/Inflienseur',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'CompanneInflienseur',
    path: '/CompanneInflienseur',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Stats',
    path: '/Stats',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
 
  
];