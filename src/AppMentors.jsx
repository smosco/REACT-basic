import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const handleChange = () => {
    const prevName = prompt("누구의 이름을 바꾸고 싶나요?");
    const updateName = prompt("이름을 무엇으로 바꾸고 싶나요?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prevName) {
          return { ...mentor, name: updateName };
        }
        return mentor;
      }),
    }));
  };
  const handleDelete = () => {
    const deleteName = prompt("누구를 삭제할건가요?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== deleteName),
    }));
  };
  const handleAdd = () => {
    const addName = prompt("추가할 멘토의 이름이 무엇인가요?");
    const addTitle = prompt("추가할 멘토의 타이틀이 무엇인가요?");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name: addName, title: addTitle }],
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>

      <button onClick={handleChange}>멘토 이름 바꾸기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
