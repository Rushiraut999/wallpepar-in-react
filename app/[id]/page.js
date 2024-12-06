"use client"
import axios from "axios";
import react, { useEffect, useState } from "react";

const Home = ({ params }) => {
  const [id, setid] = useState(params)
  const [users, setusers] = useState([])
  const getUsers = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data.data);
   
  }
  useEffect(() => {
    getUsers()
  }, [])
  for(var i=0;i<=10;i++){
    console.log(users)
  // if(1== users[i].id){
  //   console.log(users[i])
  // }
  }
  console.log(users)
  return (

    < >
      <h1>page</h1>
    </>

  )
}
export default Home
