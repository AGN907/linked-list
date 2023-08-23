function Node(val = null, nextNode = null) {
  const value = val;
  const next = nextNode;

  return {
    value,
    next,
  };
}

function LinkedList() {
  let list = {};

  function append(value) {
    if (!list.value) {
      prepend(value);
    } else {
      let tmp = list;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = Node(value);
    }

    return list;
  }

  function prepend(value) {
    list = Node(value);
  }

  function head() {
    return { value: list.value };
  }

  function tail() {
    let tmp = list;
    while (tmp.next) {
      tmp = tmp.next;
    }

    return { value: tmp.value };
  }
  function size() {
    let length = 0;
    let tmp = list;
    while (tmp) {
      length += 1;
      tmp = tmp.next;
    }

    return length;
  }

  function at(index) {
    let length = 0;
    let tmp = list;
    while (tmp) {
      if (length === index) {
        return { value: tmp.value };
      }
      length += 1;
      tmp = tmp.next;
    }

    return undefined;
  }

  function pop() {
    let cur = list;
    let prev = null;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
  }

  function contains(value) {
    let tmp = list;
    while (tmp) {
      if (tmp.value === value) return true;

      tmp = tmp.next;
    }
    return false;
  }

  function find(value) {
    let tmp = list;
    let index = 0;
    while (tmp) {
      if (tmp.value === value) return index;

      index += 1;
      tmp = tmp.next;
    }

    return null;
  }

  function toString() {
    let string = '';
    let tmp = list;
    while (tmp) {
      string += `( ${tmp.value} )`;
      if (tmp.next) {
        string += ' -> ';
      } else {
        string += ' -> null';
      }
      tmp = tmp.next;
    }

    return string;
  }

  function insertAt(value, index) {
    const target = at(index);
    let tmp = list;

    while (tmp) {
      if (tmp.value === target.value) {
        const newNode = Node(value, tmp.next);
        tmp.value = newNode.value;
        tmp.next = newNode.next;
        return;
      }
      tmp = tmp.next;
    }
  }

  function removeAt(index) {
    if (index === 0) return 'Cannot remove the head!';
    if (index >= size()) return 'Index out of range!';

    let curIndex = 0;
    let cur = list;
    let prev = null;

    while (cur) {
      if (curIndex === index) {
        break;
      }

      curIndex += 1;
      prev = cur;
      cur = cur.next;
    }

    prev.next = cur.next;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const lnkLst = LinkedList();

lnkLst.append(1);
lnkLst.append(2);
lnkLst.append(3);
lnkLst.append(4);
lnkLst.append(5);
lnkLst.append(6);
lnkLst.removeAt(3);
lnkLst.insertAt(2, 4);

console.log(lnkLst.toString());
