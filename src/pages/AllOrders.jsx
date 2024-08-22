import React from 'react'
import { useGetAllOrdersQuery } from '../features/orders/ordersApi'

const AllOrders = () => {

  const {data:allOrders,isLoading,isError,error}=useGetAllOrdersQuery()


  return (
    <main className='main-padding'>
      <div className="wrapper">
      AllOrders
      </div>
    </main>
  )
}

export default AllOrders