import React from 'react'
import "./sidebar.css"
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";

const SideBar = () => {
  return (
    <>
    <div className="myhomediv">
      <div className="sidebar">
        <h2>Welcome Korede</h2>
        <NavLink to="/" 
        style={({isActive}) => {
          return isActive ?  {
            backgroundColor: '#e81cff2c',
            color: "whitesmoke"
          } : {backgroundColor: '#0e0e0e'}
        }}>
          <LuLayoutDashboard className='icon' /> Dashboard</NavLink>

        <NavLink to="/landing2" 
        style={({isActive}) => {
          return isActive ?  {backgroundColor: '#e81cff2c',
            color: "whitesmoke"
          } : {backgroundColor: '#0e0e0e'}
        }}><GoHome className='icon' /> Home</NavLink>

        <NavLink to="/landing" 
         style={({isActive}) => {
          return isActive ?  {backgroundColor: '#e81cff2c',
            color: "whitesmoke"
          } : {backgroundColor: '#0e0e0e'}
        }}
        > <LuListTodo className='icon' /> Tasks</NavLink>

        <NavLink to= "/dashboard/taskList" style={({isActive}) => {
          return isActive ?  {backgroundColor: '#e81cff2c',
            color: "whitesmoke"
          } : {backgroundColor: '#0e0e0e'}
        }}><BsListTask className='icon'/>Task List</NavLink>

        {/* <NavLink to="/dashboard/UpdateTask" style={({isActive}) => {
          return isActive ?  {backgroundColor: '#e81cff2c',
            color: "whitesmoke"
          } : {backgroundColor: '#0e0e0e'}
        }}> <CgGoogleTasks className='icon'/>Update Task</NavLink> */}

        <NavLink to="/dd"
        style={({isActive}) => {
            return isActive ?  {backgroundColor: '#e81cff2c',
              color: "whitesmoke"
            } : {backgroundColor: '#0e0e0e'}
          }}
        ><IoMdAnalytics className='icon' /> Analytics</NavLink>

        <NavLink to="/df"
        style={({isActive}) => {
            return isActive ?  {backgroundColor: '#e81cff2c',
              color: "whitesmoke"
            } : {backgroundColor: '#0e0e0e'}
          }}
        ><MdOutlineManageAccounts className='icon' /> Accounts</NavLink>

        <NavLink to="/fg"
        style={({isActive}) => {
            return isActive ?  {backgroundColor: '#e81cff2c',
              color: "whitesmoke"
            } : {backgroundColor: '#0e0e0e'}
          }}
        > <IoNotificationsOutline className='icon' /> Notifications</NavLink>

        <NavLink to="/gh"
        style={({isActive}) => {
            return isActive ?  {backgroundColor: '#e81cff2c',
              color: "whitesmoke"
            } : {backgroundColor: '#0e0e0e'}
          }}
         > <IoSettingsOutline className='icon' /> Settings</NavLink>
      </div>
    </div>
    {/* style={({isActive}) => {
          return isActive ?  {backgroundColor: '#e81cff2c'} : {backgroundColor: '#212121'}

        }} */}
      
    </>
  )
}

export default SideBar 
