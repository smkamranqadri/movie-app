import './toolBar.scss';

function ToolBar() {
  return (
    <div className="d-flex justify-content-end">
      <div className="toolbar-container">
        <div class="select-container">
          <select>
            <option value="1">Ascending</option>
            <option value="2">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
