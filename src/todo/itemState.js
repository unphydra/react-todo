const itemState = {
  notDone: { colour: 'lightblue', decoration: 'none' },
  doing: { colour: 'orange', decoration: 'none' },
  done: { colour: 'mediumseagreen', decoration: 'line-through' },
};

itemState.notDone.next = itemState.doing;
itemState.doing.next = itemState.done;
itemState.done.next = itemState.notDone;

export default itemState;
