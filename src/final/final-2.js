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

const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.active ? "white" : "lightgray")};
  width: 100%;
`;

const MoreIcon = styled(ExpandMore)`
  padding: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
`;
const LessIcon = styled(ExpandLess)`
  padding: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
`;

const Story = ({ story, activeStoryId, setActiveStoryId }) => {
  return (
    <ColumnSection active={activeStoryId === story.id}>
      <Row
        onClick={() => setActiveStoryId(story.id)}
        clickable={activeStoryId !== story.id}
      >
        <h2>{story.title}</h2>
        {activeStoryId !== story.id && <MoreIcon />}
      </Row>
      {activeStoryId === story.id && (
        <Row>
          <p>{story.text}</p>
        </Row>
      )}
    </ColumnSection>
  );
};

function Stories({ newsFeed }) {
  document.title = "final 2";
  const [activeStoryId, setActiveStoryId] = React.useState(newsFeed[0].id);
  return (
    <>
      <h2>News feed - final 2</h2>
      {newsFeed.map((story) => {
        return (
          <Story
            story={story}
            key={story.id}
            activeStoryId={activeStoryId}
            setActiveStoryId={setActiveStoryId}
          />
        );
      })}
    </>
  );
}

export default Stories;
