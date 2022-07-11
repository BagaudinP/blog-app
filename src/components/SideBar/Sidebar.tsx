import imgCard from "../../assets/img/img.jpg";

import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Популярные посты</h3>
      <div className="sidebar-popular">
        <div className="sidebar-popular__item">
          <img src={imgCard} alt="" />
          <div className="sidebar-popular__item-description">
            <span>Mar 23, 2021</span>
            <h3>Discover Your Inner Genius To Better</h3>
          </div>
        </div>
      </div>
      <h3 className="sidebar-title">Недавние посты</h3>
      <div className="sidebar-recent">
        <div className="sidebar-recent__item">
          <img src={imgCard} alt="" />
          <div className="sidebar-recent__item-description">
            <h3>Discover Your Inner Genius To Better</h3>
            <span>Mar 23, 2021</span>
          </div>
        </div>
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
