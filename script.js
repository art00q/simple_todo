const list = {
  'create a task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
  'going up to Nastya': 'In Progress',
};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = 'To Do';
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  const statuses = [];

  for (const task in list) {
    const isStatusExists = statuses.includes(list[task]);

    if (!isStatusExists) {
      statuses.push(list[task]);
    }
  };

  statuses.forEach((status) => {
    const tasks = [];

    for (const task in list) {
      const isTaskHaveSameStatus = list[task] === status;

      if (isTaskHaveSameStatus) {
        tasks.push(task);
      }
    };

    console.log(
      `${status}:\n${tasks.map(task => `\t${task},\n`).join('')}`
    );
  });
};

showList();