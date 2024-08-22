import { useSelector } from "react-redux"
import { useGetUserOrdersQuery } from "../features/orders/ordersApi"

const Orders = () => {

  const {user}=useSelector(state=>state.auth)
  const{user_id}=user||{}

  const{data:orders,isLoading,isError,error}=useGetUserOrdersQuery(user_id)
  console.log(orders)

  return (
    <main className="main-padding" >
      <div className="wrapper">
        orders
      </div>
    </main>
  )
}

export default Orders