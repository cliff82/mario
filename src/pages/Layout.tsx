import { Center } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"



function Layout() {
  return (
    <>
      <Center>
      
        <nav >
          <ul style={{
            listStyleType: 'none',
           
            fontSize: '200%',
            paddingTop: '10%',
            paddingBottom: '20%',
           
          }}>
            <li style={{
              paddingRight: '5%',
              color: 'red'
       }}>
            <Link to="/">Home</Link>
            </li>
            
       <li style={{
              paddingRight: '5%',
              color: 'yellow'
       }}>
                 <Link to="/characters">Characters</Link>
            </li>
            
              <li style={{
              paddingRight: '5%',
              color: 'greenyellow'
       }}>
                 <Link to="/course">Courses</Link>
            </li>
            
          <li style={{
              paddingRight: '5%',
              color: 'orange'
       }}>
                 <Link to="/items">Items</Link>
            </li>
            
              <li style={{
              paddingRight: '5%',
              color: 'brown'
       }}>
         <Link to="/battle">Battle Mode</Link>
            </li>
            
            <li style={{
              color: 'purple'
       }}>
         <Link to="/boost">Booster Tracks</Link>
              </li>
              
     </ul>
          </nav>
          
      
      </Center>
              


              

   <Outlet />
 </>
  )
}

export default Layout