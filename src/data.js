import React from 'react';
import { FaHome, FaTh, FaTasks, FaUserPlus, FaPenSquare } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Links(){
 const userInfo = useGlobalContext();
 if (userInfo.email && window.innerWidth < 1000) {
  return [
   {
    text: 'home',
    url:"/",
    icon: <FaHome/>
   },
   {
    text: 'categories',
    url: '/categories',
    icon: <FaPenSquare/>
   },
   {
   text: 'create tasks',
   url: '/creattodo',
   icon: <FaTh/>
   },
   {
    text: 'analytics',
    url: '/analytics',
    icon: <FaTasks/>
   }
  ]
 }
 if (userInfo.email && window.innerWidth > 1000) {
  return [
   {
    text: 'home',
    url:"/",
    icon: <FaHome/>
   },
   {
    text: 'categories',
    url: '/categories',
    icon: <FaPenSquare/>
   },
   {
   text: 'create tasks',
   url: '/creattodo',
   icon: <FaTh/>
   },
  ]
 };
 if(!userInfo.email && window.innerWidth > 1000){
  return [
   {
    text: 'home',
    url:"/",
    icon: <FaHome/>
   },
   {
    text: 'categories',
    url: '/categories',
    icon: <FaPenSquare/>
   },
   {
   text: 'create tasks',
   url: '/creattodo',
   icon: <FaTh/>
   },
   {
    text: "login",
    url:'/login',
    icon: <FaUserPlus/>
   },
  ]
 }

  return [
   {
    text: 'home',
    url:"/",
    icon: <FaHome/>
   },
   {
    text: 'categories',
    url: '/categories',
    icon: <FaPenSquare/>
   },
   {
   text: 'create tasks',
   url: '/creattodo',
   icon: <FaTh/>
   },
   {
    text: "login",
    url:'/login',
    icon: <FaUserPlus/>
   },
  ]
}

export default Links;