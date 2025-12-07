import './styles.css'

export const Todo = () => {
  return (
    <>
      <div>
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div>TODOです</div>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <div>TODOです</div>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>
            <div>TODOでした</div>
            <button>完了</button>
          </li>
          <li>
            <div>TODOでした</div>
            <button>完了</button>
          </li>
        </ul>
      </div>
      
    </>
  );
};

export default Todo
