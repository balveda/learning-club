import React from "react";
import styled from "styled-components";

import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { ExpandLess } from "@styled-icons/material/ExpandLess";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreIcon = styled(ExpandMore)`
  padding: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const LessIcon = styled(ExpandLess)`
  padding: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
`;

const Story = ({ story }) => {
  const [showText, setShowText] = React.useState(false);
  return (
    <>
      <Row onClick={() => setShowText(!showText)} clickable>
        <h2>{story.title}</h2>
        {showText ? <LessIcon /> : <MoreIcon />}
      </Row>
      {showText && (
        <Row>
          <p>{story.text}</p>
        </Row>
      )}
    </>
  );
};

function Stories({ newsFeed }) {
  document.title = "final 1";
  return (
    <>
      <h2>News feed - final 1</h2>
      {newsFeed.map((story) => {
        return <Story story={story} key={story.id} />;
      })}
    </>
  );
}

export default Stories;
