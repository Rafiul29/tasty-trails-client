import { useGetAllMenusQuery } from "../features/menus/menusApi"

const Menu = () => {

  const {data}=useGetAllMenusQuery()
  console.log(data)
  return (
    <div>Menu</div>
  )
}

export default Menu