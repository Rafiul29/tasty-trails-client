import { useParams } from "react-router-dom";
import { useGetMenuReviewsQuery } from "../../features/reviews/reviewsApi";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import  ReviewCard  from "./ReviewCard";

const MenuItemReviews = () => {
  const { id } = useParams();
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useGetMenuReviewsQuery(id);
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && reviews?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        No reviews menu item
      </div>
    );
  } else if (!isLoading && !isError && reviews.length > 0) {
    content = (
      <>
        <h2 className="text-center text-xl md:text-3xl md:max-w-lg mx-auto text-gray-900 mb-5 font-medium">
          Menu item all reviews
        </h2>
        <div className="flex flex-col gap-5">
        {
          reviews?.map(review=>(
            <ReviewCard key={review.id} review={review}/>
          ))
        }
        </div>

      </>
    );

  }

  return (
    <section className="py-10 ">
      <div className="wrapper ">
        <div className="md:max-w-lg mx-auto">
          {content}
        </div>
      </div>
    </section>
  );
};

export default MenuItemReviews;
