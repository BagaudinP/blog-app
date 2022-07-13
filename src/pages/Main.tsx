import React from "react";
import { Card } from "../components/Card/Card";
import Sidebar from "../components/SideBar/Sidebar";
import { fetchPosts } from "../redux/actions/postActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import CardSkeleton from "../components/Card/CardSkeleton";
import NotFoundMain from "./NotFound";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../redux/slices/filterSlice";

const Main = () => {
  const dispatch = useAppDispatch();

  const { page, searchValue } = useAppSelector((state) => state.filter);
  const { posts, loading, error } = useAppSelector((state) => state.post);

  const pageCount = Math.ceil(posts.length);

  const onPageChange = ({ selected }: { selected: number }): void => {
    const page = selected + 1;
    dispatch(setCurrentPage(page));
  };

  React.useEffect(() => {
    dispatch(fetchPosts(page, searchValue));
  }, [dispatch, page, searchValue]);

  return (
    <div className="main">
      {error ? (
        <NotFoundMain error={error} />
      ) : (
        <>
          <div className="main-title">
            <h1>Все посты</h1>
          </div>
          <div className="main-content d-flex">
            <div className="main-content__items d-flex">
              {loading ? (
                [...new Array(6)].map((_, index) => <CardSkeleton key={index} />)
              ) : (
                <>
                  {posts.map((post) => (
                    <Card key={post.id} post={post} />
                  ))}
                </>
              )}
              <ReactPaginate
                className="main-paginate d-flex justify-center align-center"
                breakLabel="..."
                nextLabel=">"
                onPageChange={onPageChange}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                forcePage={page - 1}
                previousLabel="<"
              />
            </div>
            <div className="main-content__sidebar">
              <Sidebar />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
