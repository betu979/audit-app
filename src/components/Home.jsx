import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Users from './Users';
import profile_img from '/profile.png'
import users_img from '/users.png'
import create_audit_img from '/create-audit.png'
import assign_audit_img from '/assign-audit.png'
import questions_img from '/questions.png'
import reports_img from '/reports.png'
import './Home.scss'

const Home = () => {
    const navigate =  useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token'))
          console.log("loggedin");
        else navigate('/login')
        // eslint-disable-next-line
      }, []);
  return (
    <>
      <section className='section-spacing' id='dashboard'>
        <div className='container mx-auto'>
          <div className='dashboard-content'>
            <div className='dashboard-header'>
              <h3>Admin Dashboard</h3>
              <div>
                <img src={profile_img} alt='profile'/>
                <p>abhilash@gmail.com </p>
              </div>
            </div>
            <div className='dashboard-tabs'>
              <button className='active'><img src={users_img} alt='users_img'/> Users</button>
              <button><img src={create_audit_img} alt='create_audit_img'/> Create Audit</button>
              <button><img src={assign_audit_img} alt='assign_audit_img'/> Assign Audit</button>
              <button><img src={questions_img} alt='questions_img'/> Questions</button>
              <button><img src={reports_img} alt='reports_img'/> Reports</button>
            </div>
            <div className='dashboard-body'>
              <Users/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
