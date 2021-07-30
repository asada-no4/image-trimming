import './App.css';
import Sortable from 'sortablejs';


export const App: React.VFC = (): JSX.Element => {

  const listElement = document.getElementById("items");
  if (listElement != null) {
    const sortable: Sortable = Sortable.create(listElement);
    console.log(`${sortable}`);
  }
  
  return (
    <div className="test">
      <table>
        <thead><tr><td>並び替えテスト</td></tr></thead>
        <tbody id="items">
          <tr>
            <td>item 1</td>
          </tr>
          <tr>
            <td>item 2</td>
          </tr>
          <tr>
            <td>item 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
