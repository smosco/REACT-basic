import Avatar from "./components/Avatar";
import Profile from "./components/Profile";
import "./App.css";

export default function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭됨");
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        isNew={true}
      />
      <Profile
        img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="Han Hyun"
        job="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        img="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name="Han Bom"
        job="프론트엔드 개발자"
      />
      <Profile
        img="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        name="Oreno"
        job="프론트엔드 개발자"
        isNew={true}
      />
    </div>
  );
}
