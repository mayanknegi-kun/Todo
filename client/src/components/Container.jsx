const Container = (props) => {
  return (
    <div className="flex-1 h-screen w-screen flex justify-center items-center bg-[#fd8a8a]">
      {props?.children}
    </div>
  );
};

export default Container;
