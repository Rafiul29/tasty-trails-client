import React from "react";
import ratingStarConversion from "../../utlis/ratingStarConversion";
import Star from "./Star";
import moment from "moment";

const ReviewCard = ({ review }) => {
  const {
    id,
    comment,
    rating,
    created_at,
    user: { first_name, last_name } = {},
  } = review || {};



  return (
    <div className="block  p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 space-y-2">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {first_name} {last_name}
      </h5>
      <div className="flex gap-10 items-center">
        <p className="flex gap-1">{
          ratingStarConversion(rating)?.map((rat,i)=>(
            <Star key={i}/>
          ))
        }</p>
        <p className="text-gray-700">{moment(created_at).format('LL')}</p>
      </div>
      <p className="pt-2 block font-normal text-gray-700 dark:text-gray-400">{comment}</p>
    </div>
  );
};

export default ReviewCard;
