// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      margin: "10px auto",
      textAlign: "center",
      backgroundColor: "blue"
      
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p> {/* Add the "Bio: " label */}
    </div>



  );
};

export default UserProfile;
