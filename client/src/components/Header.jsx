const Header = ({ isLoggedIn }) => {
  return (
    <div className="fixed w-full p-5 flex justify-between align-center text-white bg-[#A8D1D1]">
      <p>Todoler</p>
      {/* <div className="flex gap-8">
        <button>Sing up</button>
        <button>Login</button>
      </div> */}
    </div>
  );
};

export default Header;
