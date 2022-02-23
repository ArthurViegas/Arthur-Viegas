import trywallet from '../assets/images/trywallet.png';
import onlineStore from '../assets/images/onlineStore.png';
import appDeReceitas from '../assets/images/appDeReceitas.png';

const projects = [
  {
    id: 0,
    url:'https://try-wallet.vercel.app/',
    img:trywallet,
    name: 'TryWallet:',
    isMobile: false,
    features:['React', 'React Router', 'Redux'],
  },
  {
    id: 1,
    url:'https://online-store-umber.vercel.app/',
    img:onlineStore,
    name: 'Online Store:',
    isMobile: false,
    features:['React', 'React Router', 'Redux'],
  },
  {
    id: 2,
    url:'https://app-de-receitas-sage.vercel.app/',
    img:appDeReceitas,
    name: 'App de Receitas:',
    isMobile: true,
    features:['React', 'React Router', 'Redux'],
  }
]

export default projects;
