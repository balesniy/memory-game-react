import React from "react";

const InitialPage = ({ onStart }) => {
  const handleStart = (count) => {
    onStart(count);
  };
  return (
    <div>
      <h2>Добро пожаловать!</h2>
      <p>lead paragraf text</p>
      <img alt="logo" />
      <h3>Правила игры:</h3>
      <p>описание правил - много текста</p>
      <p className="mb-4">
        Игра предназначена для тренировки визуальной памяти. В наборе есть
        множество карточек – по две штуки с одним и тем же рисунком. Нужно
        разложить карточки «рубашкой» вверх на столе, а затем переворачивать по
        две. Если они совпадают – игрок забирает их и получает ещё ход.
      </p>

      <button
        className="btn btn-warning mb-4 mr-4"
        onClick={() => handleStart(6)}
      >
        start 3Х4
      </button>
      <button
        className="btn btn-warning mb-4 mr-4"
        onClick={() => handleStart(8)}
      >
        start 4Х4
      </button>
      <button className="btn btn-warning mb-4" onClick={() => handleStart(10)}>
        start 4Х5
      </button>
    </div>
  );
};

export default InitialPage;
