import Header from "./components/Header";

const LayoutWithHeader = (props) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="w-full">{props?.children}</div>
    </div>
  );
};

export default LayoutWithHeader;
