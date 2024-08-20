import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCategory } from '../../features/category/categorySlice'

const MenuCategoryCard = ({category}) => {
  const {id,name,slug,image}=category||{}

console.log(id,name,slug,image)
const dispatch=useDispatch()

  const handeCategorySearch=(name)=>{
    console.log(name)
    dispatch(searchCategory({name:name}))
  }
  
  return (
    <div>
     <div onClick={()=>handeCategorySearch(name)} className='overflow-hidden cursor-pointer '>
     <img className='h-28 w-28 rounded-full' src={image} alt={name}/>
    
     </div>
     <p className='text-center capitalize'>{name}</p>
    </div>
  )
}

export default MenuCategoryCard