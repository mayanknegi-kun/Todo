const Container = (props) => {
  return (
    <div className="h-screen flex justify-center align-center bg-[#CEBEA4]">
      {props?.children}
    </div>
  );
};

export default Container;
