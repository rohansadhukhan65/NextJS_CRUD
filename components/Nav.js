import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-primary shadow">
          <div className="container">
            <Link  href="/"><a className="navbar-brand my-2"><Image className='mt-1' src="/icons/crud_icon.png" width={20} height={20}  /> Next CRUD   </a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link mx-3 btn text-dark btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </a>
                  <ul className="dropdown-menu shadow p-3" aria-labelledby="navbarDropdown">
                    <li>
                        <div className='dropdown-item card p-2 mx-auto shadow my-4' style={{height:'60px', width:'60px', borderRadius:'25px'}} >
                          <Image height={100} width={100} src="/icons/profile.png" />
                        </div>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
