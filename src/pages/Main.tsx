import React from "react";
import { Card } from "../components/Card/Card";
import Sidebar from "../components/SideBar/Sidebar";
import { fetchPosts } from "../redux/actions/postActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export const Main = () => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector((state) => state.post);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="main">
      <div className="main-title">
        <h1>Все посты</h1>
      </div>
      <div className="main-content d-flex">
        <div className="main-content__items d-flex">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <div className="main-content__sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
