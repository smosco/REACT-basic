export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prevName, updateName } = action;
      //const prevName = action.prevName;
      //const updateName = action.updateName;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prevName) {
            return { ...mentor, name: updateName };
          }
        }),
      };
    }
    case "added": {
      const { addName, addTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: addName, title: addTitle }],
      };
    }
    case "deleted": {
      const { deleteName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== deleteName),
      };
    }
    default: {
      throw Error(`알수 없는 액션 타입이다:${action.type}`);
    }
  }
}
