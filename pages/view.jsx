import React from 'react'



// Components
import Nav from '../components/Nav'

export default function view() {
  return (
    <>
        
        {/* Navbar
        ================== */}
        <Nav/>

        <div className="container my-5 p-5 shadow card" style={{borderRadius:'20px'}}>
            <div className="text-end">
                <button className='btn btn-primary my-5' style={{width:'10rem'}}>Add New</button>
            </div>
            <table className="table shadow p-5">
                <thead className='bg-primary text-light'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className='btn btn-info text-light'>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    
    </>
  )
}
