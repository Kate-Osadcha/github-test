const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

// console.table(friends);

// Ищем друга по имени

const findFriendByName = function (allFriends, nameFriend) {
  for (const friend of allFriends) {
    if (friend.name === nameFriend) {
      return `Друг с именем ${nameFriend} найден`;
    }
  }

  return `Друг с именем ${nameFriend} не найден`;
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

// Получаем имена всех друзей

const allNameFriends = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }

  return names;
};

console.log(allNameFriends(friends));

// Получаем имена только друзей которые онлайн/оффлайн

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};
console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};
console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
