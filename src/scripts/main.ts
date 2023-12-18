import Dexie from 'dexie';
import jsonData from './data.json'; //JSON（初期データ）をインポート

interface Book {
  id: number;
  title: string;
  author: string;
}

const DbConfig = {
  name: 'testDb',
  table:'books'
};

//
// IndexedDB アクセスインスタンス（Dexie）生成
//
const idb = new Dexie(DbConfig.name);
idb.version(1).stores({
  books: '++id, author'  //テーブル定義(先頭がキー、それ以外はインデックスカラム。全フィールド定義は必要はありません。)
});

/**
 * データからHTMLのtable要素を生成します。
 * @param books
 * @returns 
 */
function generateTable(books: Book[]): HTMLTableElement {
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();

  // ヘッダー行を作成
  const headerRow = thead.insertRow();
  ['ID', '書名', '著者'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
  });

  // データ行を作成
  books.forEach(book => {
      const row = tbody.insertRow();
      row.insertCell().textContent = book.id.toString();;
      row.insertCell().textContent = book.title.toString();
      row.insertCell().textContent = book.author.toString();
    });

  return table;
}

/**
 * DBからデータをロードして、HTML要素を構築します。
 * @returns
 */
async function loadTable() {
  const books = await idb[DbConfig.table].toArray()
  const container: HTMLElement|null = document.getElementById('table-container');
  if (container === null) return;
  if (container.firstChild) container.removeChild(container.firstChild);
  container.appendChild(generateTable(books));
}

//
// イベント処理
//
//データを１件追加（値はランダム生成）
document.getElementById('addButton')!.addEventListener('click', async () => {
  // 1 から 99999 までのランダムな整数を生成
  const randomNum = Math.floor(Math.random() * 99999) + 1;
  // 整数を文字列に変換し、5桁になるようにゼロで埋める
  const suffix = randomNum.toString().padStart(5, '0');
  await idb[DbConfig.table].add({title: 'Title-' + suffix, author: 'Author-' + suffix});
  loadTable();
});

//全データ削除
document.getElementById('clearButton')!.addEventListener('click', async () => {
  await idb[DbConfig.table].clear();
  loadTable();
});

//DB再構築（DB削除）
document.getElementById('resetDbButton')!.addEventListener('click', async () => {
  await idb.delete();
  window.location.reload();  // DBを消すだけなので、要リロード
});

//JSONデータをDBにインポート
document.getElementById('loadButton')!.addEventListener('click', async () => {
  await idb[DbConfig.table].bulkAdd(jsonData);
  loadTable();
});

//初期ロードイベント
document.addEventListener('DOMContentLoaded', async () => {
  loadTable();
});