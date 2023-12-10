import Dexie from 'dexie';

// タスクを格納するためのオブジェクトストアを定義
// ストア＝テーブルのようなもの。
const db = new Dexie('TaskDatabase');
db.version(1).stores({
  tasks: '++id,name,completed'
});

// const addTask = async(task) => {
//   try {
//     await db.tasks.add(task);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const getTasks = async () => {
//   try {
//     const tasks = await db.tasks.toArray();
//     return tasks;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateTask = async (task) => {
//   try{
//     await db.tasks.update(task.id, task);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteTask = async (taskId) => {
//   try {
//     await db.tasks.delete(taskId);
//   } catch(error) {
//     console.log(error);
//   }
// };

const taskList = document.getElementById("task-list");

document.getElementById("add-task").onclick = function() {
  // 入力値を受け付ける
  // DBに追加
  db.tasks.add({
    name: "John",
    completed: true,
  });
  // 登録した値を取得し、view表示
  db.tasks.toArray().then((tasks) => {
    tasks.forEach((ele) => {
      var task = document.createElement("li");
      task.innerHTML = `${ele["id"]}: ${ele["name"]}`;
      taskList.appendChild(task);
    })
  })
}

// DBの値を削除
