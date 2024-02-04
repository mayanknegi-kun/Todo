const ContentContainer = ({ classes, ...props }) => {
  return (
    <div className={`flex flex-col h-full bg-[#0D0D0D] rounded-lg ${classes}`}>
      {props?.children}
    </div>
  );
};

export default ContentContainer;
