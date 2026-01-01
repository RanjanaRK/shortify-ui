import useUser from "@/hooks/user/useUser ";

const UserProfile = () => {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Unauthorized</p>;

  return (
    <>
      <div className="">
        <h1>Hello {user.name}</h1>
      </div>
    </>
  );
};

export default UserProfile;
