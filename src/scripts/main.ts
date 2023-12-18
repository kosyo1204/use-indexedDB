import Dexie from 'dexie';

const Dbconfig = {
  name: 'MyDatabase',
  table: 'books',
}

const db = new Dexie(Dbconfig.name);
db.version(1).stores({
  books: '++id, author'
});

document.getElementById('addButton')!.addEventListener('click', () => {

});

document.getElementById('loadButton')!.addEventListener('click', () => {

});

document.getElementById('clearButton')!.addEventListener('click', () => {

});

document.getElementById('resetDbButton')!.addEventListener('click', () => {

});

//初期ロードイベント
document.addEventListener('DOMContentLoaded', () => {
  // loadTable();
});


/** 
 * DBからデータを取得
 * 取得したデータを元にHTMLを作成
 * 画面に表示
* */

/**
 * データ追加時はDBへ保存した後にページを表示
 * 表示する関数を用意すればOK
 * 取得、追加、削除を終えた上で適用できそうなパターンを検討する
 * 削除するところをリポジトリパターンに任せることができないか、など。
 */