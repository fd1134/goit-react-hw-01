import './App.css'
import Profile from './components/Profile/Profile'
import {avatar,username,tag,location,stats} from './data/userData.json'

function App() {
  

  return (
    <>
      <Profile image={avatar} name={username} tag={tag} location={location} stats={stats}/>
      
    </>
  )
}

export default App
