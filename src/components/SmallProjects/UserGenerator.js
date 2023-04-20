import { useState } from 'react'

const UserGenerator = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  
  async function fetchData() {
    setLoading(true)
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json();
      const item  = data.results[0];
      setLoading(false);
      setUser(item);
    }
    
  return (
    <div >
      <button onClick={fetchData}>Click to Generate Person</button>
      {loading && <p>Loading User...</p>}
      {user && 
      <div>
        <div className='card' style={{width: "12rem"}}>
          <img src={user.picture.large} alt='Random User' className='card-img-top'/>
          <div className='card-body'>
            <h5 className='card-title'>{user.name.first} {user.name.last}</h5>
            <p className='card-text'>{user.email}</p>
          </div>
        </div>

      </div>
      }
    </div>
  )
}

export default UserGenerator
