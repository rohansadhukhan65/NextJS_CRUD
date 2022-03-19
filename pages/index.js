 
import Link from 'next/link'




// import styles 
import crud from '../styles/CRUD.module.css';

export default function Home() {
  return (
    <>
        

      
        <div className={`card bg-primary text-center shadoow-lg p-5 text-light ${crud.center}`} style={{borderRadius:'20px'}}>
          <h3>Welcome to Next.js CRUD !</h3>
          <div className="text-center my-5">
            <Link href="/view"><a className='btn w-50 btn-light py-3'>Get Started !</a></Link> 
          </div>
        </div>
        


    </>
  )
}
