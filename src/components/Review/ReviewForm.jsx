import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddReviewMutation } from "../../features/reviews/reviewsApi";
import { useParams } from "react-router-dom";
import ButtonLoading from "../ui/ButtonLoading"
import Error from "../ui/Error";
import Success from "../ui/Success";


const ReviewForm = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("1");
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const [addReview, { data, isLoading, isError, error:responseError }] =
    useAddReviewMutation();

  const handleSubmitRating = (e) => {
    e.preventDefault();
    setError('')
    addReview({
      user: user_id,
      menu_item: id,
      comment,
      rating,
    });
  };

  useEffect(()=>{
    if(responseError?.data){
      setError(responseError?.data?.error)
    }
    if(data?.id){
      setSuccess('Commnet added successfully')
    }
    setRating('1')
    setComment('')
  },[responseError,data?.id])

  return (
    <div className="wrapper">
      <h2 className="text-center text-4xl md:max-w-lg mx-auto text-gray-800">Please Review here</h2>
     
      <form className="md:max-w-lg mx-auto" onSubmit={handleSubmitRating}>
      <div>
        {success && (<Success message={success}/>)}
        {error && (<Error message={error}/>)}
      </div>
        <div className="mb-3">
          <label
            htmlFor="comment"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Comment
          </label>
          <textarea
            id="comment"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Write your thoughts here..."
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="rating"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Rating
          </label>
          <select
            onChange={(e) => setRating(e.target.value)}
            id="rating"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            value={rating}
            required
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none w-full focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
         {!isLoading ? "Submit":(<ButtonLoading/>)}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
