import React, { useContext } from 'react'
import './setting.css'
import StateContext from '../../redux/Context';

export default function Setting({user,name, email, phoneNum}) {

  const [state,setState]  = useContext(StateContext)

  return(
         <div className="profile-section">
           {
             state.login?(
               <>
               <div className="profile-photo">
               <img src='/image/default-avt-image.jpg'/>
             </div>
             <div className="profile-detail">
                 <form action="/updateAccount" method="POST">
                     <div className="profile-input">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id='name' value={state.userData.name} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' value={state.userData.email} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="mob">Mobile No.</label>
                        <input type="text" id='mob' value="" />
                     </div>
                     {/* <button type='submit'>UPDATE</button> */}
                 </form>
             </div>
             </>
             ):(
               <div className='no-user'>
                 <h1>You are not Logged In!,Please Login</h1>
                 <button>Login</button>
                </div>
             )
           }
             
         </div>
      

  );
}

