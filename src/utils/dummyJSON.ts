
import image1 from '../../public/image/image-1.jpg'
import image2 from '../../public/image/image-2.jpg'
import Images_Icons from '@/constants/icons-images';

export const slides: any = [
    {
      id: 1,
      description: 'This is the first slide description.',
      image: image2,
    },
    {
      id: 2,
      description: 'This is the second slide description.',
      image: image1, 
    },
  ];


 export const meetups = [
    {
      id: 1,
      title: 'Idea Brainstorming & latest updates',
      date: 'Sep 30, 2023',
      link: 'https://lu.ma/1wfrujuj',
    },
    {
      id: 2,
      title: 'ETHAbuja Community Lunched',
      date: 'Aug 19, 2023',
      link: 'https://chat.whatsapp.com/FcsSrUumLY0IdBUcsXqcQi',
    },
  ];


  export const partners = [
    {
      partnerimage: Images_Icons.ayaLogo,
      partnername: "Aya",
      partnerwebsite: "https://www.ayahq.com/"
    },
    {
      partnerimage: Images_Icons.web3bridge,
      partnername: "Web3bridge",
      partnerwebsite: "https://www.web3bridge.com/"
    }
  ]