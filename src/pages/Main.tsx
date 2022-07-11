import { Card } from "../components/Card/Card";
import Sidebar from "../components/SideBar/Sidebar";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-title">
        <h1>Все посты</h1>
      </div>
      <div className="main-content d-flex">
        <div className="main-content__items d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="main-content__sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
