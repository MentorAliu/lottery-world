import React from 'react'
import { useSelector } from 'react-redux'
import { TableContainer } from '../components/shared'

export const SessionPlayers = () => {
  const {users, isLoading} = useSelector(state => state.users)
  console.log(users)
  return (
    <TableContainer title="All Players" time="time" propData={users} isLoading={isLoading} isForAll/>
  )
}
