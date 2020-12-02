import React from "react";
import styled from "styled-components";

import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { ExpandLess } from "@styled-icons/material/ExpandLess";
import { Close } from "@styled-icons/material/Close";

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

const CloseIcon = styled(Close)`
  padding: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Story = ({ story, activeStoryId, setActiveStoryId, hideStory }) => {
  return (
    <ColumnSection active={activeStoryId === story.id}>
      <Row
        onClick={() => {
          if (activeStoryId !== story.id) {
            setActiveStoryId(story.id);
          }
        }}
        clickable={activeStoryId !== story.id}
      >
        <h2>{story.title}</h2>
        {activeStoryId !== story.id ? (
          <MoreIcon />
        ) : (
          <CloseIcon onClick={() => hideStory(story.id)} />
        )}
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
  document.title = "final 3";
  const [stories, setStories] = React.useState(newsFeed);
  const [activeStoryId, setActiveStoryId] = React.useState(newsFeed[0].id);

  const hideStory = (hideStoryId) => {
    const newStories = [...stories.filter((s) => s.id !== hideStoryId)];
    setActiveStoryId(newStories.length ? newStories[0].id : null);
    setStories(newStories);
  };

  return (
    <>
      <h2>News feed - final 3</h2>
      {stories.length ? (
        stories.map((story) => {
          return (
            <Story
              story={story}
              key={story.id}
              activeStoryId={activeStoryId}
              setActiveStoryId={setActiveStoryId}
              hideStory={hideStory}
            />
          );
        })
      ) : (
        <h3>You've hidden all the stories. Refresh to play again!</h3>
      )}
    </>
  );
}

export default Stories;
