import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const GithubApi = () => {
  // 38b72946bb17f9bfcb158e4336d52d9fc0a6a73a
  const [name, setName] = useState("");
  const [img, setImg] = useState({});
  const [bio, setBio] = useState("");
  const [repo, setRepo] = useState([]);
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(true);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    const fetchDataUser = async () => {
      await axios
        .get("https://api.github.com/users/JesperKYH")
        .then((res) => {
          setName(res.data.name);
          setImg(res.data.avatar_url);
          setBio(res.data.bio);
          setUrl(res.data.html_url);

          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    const fetchDataRepo = async () => {
      await axios
        .get("https://api.github.com/users/JesperKYH/repos")
        .then((res) => {
          setRepo(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchDataUser();
    fetchDataRepo();

    return () => {
      setDidMount(false);
      console.log(didMount);
    };
  }, [didMount]);

  return (
    <>
      {loading ? (
        <p>API Loading...</p>
      ) : (
        <>
          <Title>GithubAPI</Title>
          <Wrapper>
            <Name>
              <AName target="_blank" rel="noreferrer" href={url}>
                {name}
              </AName>
            </Name>
            <Img src={img} />
            <Bio>{bio}</Bio>
          </Wrapper>
          <RepoWrapper>
            {repo.map(function (item, i) {
              return (
                <RepoItem key={i}>
                  <TextName>
                    Repo:{" "}
                    <A target="_blank" rel="noreferrer" href={item.html_url}>
                      {item.name}
                    </A>{" "}
                  </TextName>
                  <Language>
                    Language: <LanguageSpan>{item.language}</LanguageSpan>
                  </Language>
                </RepoItem>
              );
            })}
          </RepoWrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 500px;
  flex-flow: column nowrap;
  background-color: #222831;
  font-family: "Rubik", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const Name = styled.p`
  font-size: 1.6rem;
  color: rgb(255, 255, 255);
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 5px black;
`;

const Bio = styled.p`
  width: 280px;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
`;

const RepoWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  max-height: 100vh;
  max-width: 80vw;
  margin-top: 5%;
  font-family: "Rubik", sans-serif;
`;

const RepoItem = styled.div`
  border: 2px solid #09015f;
  border-radius: 20px;
  margin: 5px 0px;
  padding: 5px 5px;
  width: 300px;
`;

const A = styled.a`
  color: #af0069;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const TextName = styled.p`
  font-size: 1.2rem;
`;

const Language = styled.p`
  font-size: 1.2rem;
`;

const LanguageSpan = styled.span`
  font-weight: bold;
  color: #af0069;
`;

const AName = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
`;

export default GithubApi;
