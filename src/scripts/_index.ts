import Dexie, { Table } from 'dexie';

interface Friend {
  id?: number;
  name?: string;
  age?: number;
}

class FriendDatabase extends Dexie {
  public friends!: Table<Friend, number>;

  public constructor() {
    super("FriendDatabase");
    this.version(1).stores({
      friends: "++id,name,age"
    });
  }
}

const db = new FriendDatabase();

db.transaction('rw', db.friends, async() => {
  if ((await db.friends.where({name: 'John'}).count()) === 0) {
    const id = await db.friends.add({name: "John", age: 21});
    alert (`Add friend with id ${id}`);
  }

  const youngFriends = await db.friends.where("age").below(25).toArray();

  alert ("My young friends: " + JSON.stringify(youngFriends));
}).catch(e => {
  alert(e.stack || e);
});

