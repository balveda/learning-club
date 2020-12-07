import React from "react";
import "./App.css";
import styled from "styled-components";

import { newsFeed } from "./data/newsFeed";

import Exercise from "./exercise/exercise";
import Final1 from "./final/final-1";
import Final2 from "./final/final-2";
import Final3 from "./final/final-3";
import Final4 from "./final/final-4";
import Final5 from "./final/final-5";
import Final6 from "./final/final-6";

const sections = [
  {
    sectionId: "exercise",
    buttonText: "exercise",
  },
  {
    sectionId: "final-1",
    buttonText: "final 1",
  },
  {
    sectionId: "final-2",
    buttonText: "final 2",
  },
  {
    sectionId: "final-3",
    buttonText: "final 3",
  },
  {
    sectionId: "final-4",
    buttonText: "final 4",
  },
  {
    sectionId: "final-5",
    buttonText: "final 5",
  },
  {
    sectionId: "final-6",
    buttonText: "final 6",
  },
];

function App() {
  const [activeSectionId, setActiveSectionId] = React.useState(
    sections[0].sectionId
  );

  return (
    <Container>
      <Nav>
        {sections.map((section) => {
          return (
            <Button
              onClick={() => setActiveSectionId(section.sectionId)}
              disabled={section.sectionId === activeSectionId}
              active={section.sectionId === activeSectionId}
              key={section.sectionId}
            >
              {section.buttonText}
            </Button>
          );
        })}
      </Nav>
      {activeSectionId === "exercise" && <Exercise newsFeed={newsFeed} />}
      {activeSectionId === "final-1" && <Final1 newsFeed={newsFeed} />}
      {activeSectionId === "final-2" && <Final2 newsFeed={newsFeed} />}
      {activeSectionId === "final-3" && <Final3 newsFeed={newsFeed} />}
      {activeSectionId === "final-4" && <Final4 newsFeed={newsFeed} />}
      {activeSectionId === "final-5" && <Final5 newsFeed={newsFeed} />}
      {activeSectionId === "final-6" && <Final6 newsFeed={newsFeed} />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  align-items: center;
  color: lightgrey;
  border: 1px solid silver;
  padding-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
`;

const Button = styled.button`
  border: 0px;
  font-size: 20px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin: 5px;
  background-color: ${(props) => (props.disabled ? "#e7e7e7" : "black")};
  border: 1px solid ${(props) => (!props.disabled ? "#e7e7e7" : "black")};
  color: ${(props) => (!props.disabled ? "#e7e7e7" : "black")};
  border-radius: 3px;
`;
