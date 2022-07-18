import imgCard from "../../assets/img/img.jpg";
import { useAppSelector } from "../../hooks/redux";

import "./index.scss";

const Sidebar = () => {
  const { posts } = useAppSelector((state) => state.post);

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Популярные посты</h3>
      <div className="sidebar-popular">
        {[...posts]
          .sort((a, b) => b.likesCount - a.likesCount)
          .slice(0, 3)
          .map((popular) => (
            <div key={popular.id} className="sidebar-popular__item">
              <img src={popular.imageUrl} alt="" />
              <div className="sidebar-popular__item-description">
                <span>{popular.createdAt.substring(0, 10)}</span>
                <span className="d-flex align-center justify-between likes-count">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 18"
                    fill="#ef534f"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.88303 16.3322L8.88231 16.3316C6.2971 14.032 4.19229 12.1589 2.72777 10.4025C1.26867 8.65268 0.5 7.08163 0.5 5.3951C0.5 2.65902 2.68702 0.5 5.5 0.5C7.09217 0.5 8.62543 1.22946 9.62243 2.37792L10 2.81285L10.3776 2.37792C11.3746 1.22946 12.9078 0.5 14.5 0.5C17.313 0.5 19.5 2.65902 19.5 5.3951C19.5 7.08164 18.7313 8.65271 17.2721 10.4039C15.8098 12.1588 13.7093 14.0312 11.1297 16.3307L11.1184 16.3408L11.1173 16.3417L10.0013 17.3308L8.88303 16.3322Z"
                      stroke="#ef534f"
                    />
                  </svg>
                  {popular.likesCount}
                </span>
                <h3>{popular.title}</h3>
              </div>
            </div>
          ))}
      </div>
      <h3 className="sidebar-title">Недавние посты</h3>
      <div className="sidebar-recent">
        {[...posts].slice(0, 3).map((recent) => (
          <div className="sidebar-recent__item">
            <img src={recent.imageUrl} alt="img" />
            <div className="sidebar-recent__item-description">
              <h3>{recent.title}</h3>
              <span>{recent.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        ))}
      </div>
      <h3 className="sidebar-title">Категории</h3>
      <div className="sidebar-categories">
        <ul>
          <li>
            <a href="#">
              Все <span>(33)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Путешествия <span>(9)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Дизайн <span>(3)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Спорт <span>(13)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Прочее <span>(8)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
