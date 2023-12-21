import React from 'react'
import './setting.css'

export default function Setting({user,name, email, phoneNum}) {


  return(
      <>
         <div className="profile-section">
           {
             user?(
               <>
               <div className="profile-photo">
               <h1>name</h1>
             </div>
             <div className="profile-detail">
                 <form action="/updateAccount" method="POST">
                     <div className="profile-input">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id='name' value={name} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' value={email} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="mob">Mobile No.</label>
                        <input type="text" id='mob' value={phoneNum} />
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
      

      </>
  );
}

