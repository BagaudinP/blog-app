import iconClock from "../../assets/icons/clock.png";
import { IPost } from "../../components/models/models";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addFavoritePost } from "../../redux/slices/favoriteSlice";

const FavoritePostsCard = ({ id, imageUrl, title, author, likesCount, text, createdAt }: IPost) => {
  const dispatch = useAppDispatch();
  const { favoritesPosts } = useAppSelector((state) => state.favorite);

  const activePosts = favoritesPosts.find((obj) => obj.id === id);
  const onClickAddFavorite = () => {
    const favoritePost: IPost = {
      id,
      title,
      text,
      imageUrl,
      author,
      likesCount,
      createdAt,
    };
    dispatch(addFavoritePost(favoritePost));
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={imageUrl} alt="" />
        <div
          onClick={onClickAddFavorite}
          className={`${
            activePosts ? "card-img__favorite" : "card-img__active"
          } ? d-flex justify-center align-center`}>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.88303 16.3322L8.88231 16.3316C6.2971 14.032 4.19229 12.1589 2.72777 10.4025C1.26867 8.65268 0.5 7.08163 0.5 5.3951C0.5 2.65902 2.68702 0.5 5.5 0.5C7.09217 0.5 8.62543 1.22946 9.62243 2.37792L10 2.81285L10.3776 2.37792C11.3746 1.22946 12.9078 0.5 14.5 0.5C17.313 0.5 19.5 2.65902 19.5 5.3951C19.5 7.08164 18.7313 8.65271 17.2721 10.4039C15.8098 12.1588 13.7093 14.0312 11.1297 16.3307L11.1184 16.3408L11.1173 16.3417L10.0013 17.3308L8.88303 16.3322Z"
              stroke="white"
            />
          </svg>
        </div>
      </div>
      <div className="card-main">
        <div className="card-main__subtitle">{title}</div>
        <div className="card-main__info d-flex">
          <span className="card-main__info-author">
            Автор: <strong> {author}</strong>
          </span>
          <span className="card-main__info-date">
            <img src={iconClock} alt="clock" />
            <strong>{createdAt.substring(0, 10)}</strong>
          </span>
          <span className="card-main__info-like">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.88303 16.3322L8.88231 16.3316C6.2971 14.032 4.19229 12.1589 2.72777 10.4025C1.26867 8.65268 0.5 7.08163 0.5 5.3951C0.5 2.65902 2.68702 0.5 5.5 0.5C7.09217 0.5 8.62543 1.22946 9.62243 2.37792L10 2.81285L10.3776 2.37792C11.3746 1.22946 12.9078 0.5 14.5 0.5C17.313 0.5 19.5 2.65902 19.5 5.3951C19.5 7.08164 18.7313 8.65271 17.2721 10.4039C15.8098 12.1588 13.7093 14.0312 11.1297 16.3307L11.1184 16.3408L11.1173 16.3417L10.0013 17.3308L8.88303 16.3322Z"
                stroke="black"
              />
            </svg>
            <strong>{likesCount} Нравится</strong>
          </span>
        </div>
        <h4 className="card-main__description">{text}</h4>
      </div>
      <div className="card-btn">
        <a>Читать</a>
      </div>
    </div>
  );
};

export default FavoritePostsCard;
