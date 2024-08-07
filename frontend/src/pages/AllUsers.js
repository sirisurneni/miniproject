import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
    const [allUser,setAllUsers] = useState([])
    const fetchAllUsers = async()=>{
      const fetchData = await fetch(SummaryApi.allUser.url,{
        method : SummaryApi.allUser.method,
        credentials:'include'
      })
      const dataResponse = await fetchData.json()
      if(dataResponse.success){
        setAllUsers(dataResponse.data)
      }
      if(dataResponse.error){
        toast.error(dataResponse.message)
      }

      

    }
    useEffect(()=>{
      fetchAllUsers()
    },[])

  return (
    <div class='pb-4 bg-white'>
      <table className='w-full userTable'>
        <thead>
          <tr>
          <th>Sno.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Date of Creation</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {
              allUser.map((el,index)=> {
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{el?.name}</td>
                    <td>{el?.email}</td>
                    <td>{el?.role}</td>
                    <td>{moment(el?.createdAt).format('LL')}</td>
                    <td>
                      <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-300 hover:text-white'>
                        <MdModeEdit/>
                      </button>
                    </td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
      <ChangeUserRole/>
    </div>
  )
}

export default AllUsers