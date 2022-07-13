interface notFoundMainProps {
  error: string;
}

const NotFoundMain = ({ error }: notFoundMainProps) => {
  return (
    <div className="d-flex align-center flex-column m-auto">
      <h3 className="mb-10">Произошла ошибка:</h3>
      <h2 className="mb-10 fw-bold"> {error} :(</h2>
      <button>Вернуться на Главную</button>
    </div>
  );
};

export default NotFoundMain;
