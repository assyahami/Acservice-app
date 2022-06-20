import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Ri24HoursFill } from 'react-icons/ri';
import { BsFillCreditCard2BackFill, BsCreditCard2Front } from 'react-icons/bs';

export const icons = [
  <FaWhatsapp />,
  <FaInstagram />,
  <FaFacebook />,
  <FaLinkedinIn />,
  <FaTwitter />,
];
export const subintroads = [
  {
    id: 1,
    icon: <BsFillCreditCard2BackFill fontSize={'2.5rem'}/>,
    name: 'Online Payment',
    text: 'Discount 15% for Online Payment',
  },
  {
    id: 2,
    icon: <Ri24HoursFill fontSize={'2.5rem'} />,
    name: '24Hours Service ',
    text: 'Contact us anytime For Service',
  },
  {
    id: 3,
    icon: <BsCreditCard2Front fontSize={'2.5rem'}/>,
    name: 'Warranty Card',
    text: 'Warranty card For Every Service  ',
  },
]
