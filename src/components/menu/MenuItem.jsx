

const MenuItem = ({menuitem}) => {
  const {id,name,description,ingredients,image,price,slug}=menuitem||{}
  console.log(id,name,description,ingredients,image,price,slug)
  return (
    <div>MenuItem</div>
  )
}

export default MenuItem