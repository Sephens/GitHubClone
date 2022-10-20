import React from 'react'
import {TbBook, TbBook2} from 'react-icons/tb';
import {AiOutlineInbox} from 'react-icons/ai';
import {FiBox, FiStar} from "react-icons/fi"
import Left from '../components/Left';
import Overview from '../components/Overview'

function Profile () {
  return (
    <div className='profile'>
    <nav>
        <div className='profile-icon'>
        <TbBook />
        <h2>Overview</h2>
        </div>

        <div className='profile-icon'>
        <TbBook2 />
        <h2>Repositories</h2>
        </div>

        <div className='profile-icon'>
        <AiOutlineInbox />
        <h2>Projects</h2>
        </div>

        <div className='profile-icon'>
        <FiBox />
        <h2>Packages</h2>
        </div>

        <div className='profile-icon'>
        <FiStar />
        <h2>Stars</h2>
        </div>
    </nav>
    
    <div className='line-four'/>

    <div className='center-section'>

    <Left/>
    <Overview />

    </div>

    </div>
  )
}

export default Profile;
