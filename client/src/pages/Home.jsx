import AuthForm from "../components/AuthForm";
import Container from "../components/Container";
import ContentContainer from "../components/ContentContainer";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const [authType, inputData, handleChange, handleAuth, toggleAuthOption] =
    useAuth();

  return (
    <Container>
      <ContentContainer>
        <AuthForm
          inputData={inputData}
          handleAuth={handleAuth}
          handleChange={handleChange}
          signup={authType.login}
        />
      </ContentContainer>
    </Container>
  );
};

export default Home;
