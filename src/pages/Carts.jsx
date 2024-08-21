import { useSelector } from "react-redux"
import { useGetUserCartItemQuery } from "../features/carts/cartsApi"

const Carts = () => {
  const {user}=useSelector(state=>state.auth)
  const {user_id}=user||{}

  const{data}=useGetUserCartItemQuery(user_id)
  console.log(data)
  return (
    <main className="main-padding">
      <div className="wrapper">
qw
      </div>
    </main>
  )
}

export default Carts