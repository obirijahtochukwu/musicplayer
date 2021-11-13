import { FaCartArrowDown, FaGasPump, FaQuestion, FaRegBell, FaRegCalendarCheck, FaRegSun, FaSync, FaUserTie, FaStaylinked } from "react-icons/fa";

export const navLinks = [
 {
  page: 'first',
  links: [

   {
    id: 1,
    link: 'subscribe',
    icon: <FaStaylinked/>
   },
   {
    id: 2,
    link: 'recharge',
    icon: <FaGasPump/>
   },
   {
    id: 3,
    link: 'get freebies',
    icon: <FaCartArrowDown/>
   },
   {
    id: 4,
    link: 'transfer coins',
    icon: <FaSync/>
   },
  ]  
 },
 {
  page: 'second',
  links: [
   {
    id: 1,
    link: 'notifications',
    icon: <FaRegBell/>
   },
   {
    id: 2,
    link: 'my pre-orders',
    icon: <FaRegCalendarCheck/>
   },
   {
    id: 3,
    link: 'my profile',
    icon: <FaUserTie/>
   },
  ]
 },
 {
  page: 'third',
  links: [
   {
    id: 1,
    link: 'settings',
    icon: <FaRegSun/>
   },
   {
    id: 2,
    link: 'help',
    icon: <FaQuestion/>
   },
  ]
 }
]

