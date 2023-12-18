# Dexie.jsとは

## 概要
IndexedDBのラッパーライブラリ。
JSでDBを簡単に扱えるようにするためのツール。
IndexedDBのAPIは複雑なため、開発された。

## ユースケース
Webアプリに最適なツール。
オフラインでアプリを動作させたい場合
クライアント側で大量のデータを扱う場合。

## 特徴
APIを簡単に扱える。
Promiseベースなので、非同期処理を扱える。

# 目標
リポジトリパターンの適用

# わかったこと
DB.table.clear  ストアからすべてのオブジェクトを削除する。完了したら返されたPromiseを解決または拒否
DB.delete       DBを削除。完了したらPromiseのthenメソッドを呼び出す。

# error
型  の式を使用して型 'Dexie' にインデックスを付けることはできないため、要素は暗黙的に any 型になります。
  型 'string' のパラメーターを持つインデックス シグネチャが型 'Dexie' に見つかりませんでした。ts(7053)


jsonのimport
  https://zenn.dev/poyomitech/articles/d6b8ffb42e3cd4

# リファクタポイント



## 参考記事
https://github.com/dexie/Dexie.js
https://qiita.com/_linkin/items/8d68c8bd3cec33708e7a
