import React from 'react';

const GAME_LEVELS = [
  { pairsCount: 6, fieldSize: '3Х4' },
  { pairsCount: 8, fieldSize: '4Х4' },
  { pairsCount: 10, fieldSize: '4Х5' },
];

function InitialPage({ onStart }) {
  const handleStart = (count) => {
    onStart(count);
  };
  return (
    <div>
      <h2>Добро пожаловать!</h2>
      <p>lead paragraf text</p>
      <img alt="logo" />
      <h3>Правила игры:</h3>
      <p>
        описание правил - много текста
      </p>
      <p className="mb-4">
        Игра предназначена для
        тренировки визуальной памяти. В
        наборе есть множество карточек –
        по две штуки с одним и тем же
        рисунком. Нужно разложить
        карточки «рубашкой» вверх на
        столе, а затем переворачивать по
        две. Если они совпадают – игрок
        забирает их и получает ещё ход.
      </p>
      {GAME_LEVELS.map(
        ({ pairsCount, fieldSize }) => (
          <button
            key={pairsCount}
            className="btn btn-warning mb-4 mr-4"
            onClick={() =>
              handleStart(pairsCount)
            }
          >
            {`start ${fieldSize}`}
          </button>
        )
      )}
    </div>
  );
}

export default InitialPage;
