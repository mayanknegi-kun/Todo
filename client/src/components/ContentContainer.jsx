const ContentContainer = ({ classes, ...props }) => {
  return (
    <div className={`m-20 bg-[#FFCBCB] w-1/2 rounded-lg ${classes}`}>
      {props?.children}
    </div>
  );
};

export default ContentContainer;
