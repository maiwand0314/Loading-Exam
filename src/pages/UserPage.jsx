import MiniProfile from "../components/MiniProfile";
import UsernameAndAvatar from "../components/UsernameAndAvatar"
import "../css/UsernameAndAvatar.css"
import "../css/MiniProfile.css"

const UserPage = () => {
  return (
        <>
          <UsernameAndAvatar />
          {/* uncomment the component below to see it in action */}
          {/*<MiniProfile />*/}
        </>
  );
};

export default UserPage;
