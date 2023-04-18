import './App.css'
import ListUsers from './ViewUsersList'

function ViewUsers() {
    return (
        <div className='Users'>
            <header className='Users-headers'> 
            <h3>View Users</h3>
            </header>
        <main>
        <ListUsers />
        </main>
       
        </div> 
    )
    
}

export default Users