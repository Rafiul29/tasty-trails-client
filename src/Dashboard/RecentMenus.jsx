import React from "react";

const RecentMenus = ({ menulists }) => {

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
          <tr>
          <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>

            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {menulists?.length>0 && menulists?.map((menu,i)=>(
            <tr key={menu.id} className="bg-white border-b dark:bg-gray-800">
               <th
              scope="row"
              className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {i+1}
            </th>
            <th
              scope="row"
              className="px-6 py-4 overflow-hidden font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-1 items-center"
            >
              <img src={menu?.image} className="h-10 w-10 object-cover rounded-lg" alt=""  />
            {menu?.name}
            </th>
            <td className="px-6 py-4">{menu?.price}৳</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default RecentMenus;
