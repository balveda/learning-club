import React from "react";
import styled from "styled-components";
import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { ExpandLess } from "@styled-icons/material/ExpandLess";
import { Close } from "@styled-icons/material/Close";
import { ThumbDown } from "@styled-icons/material/ThumbDown";
import { ThumbUp } from "@styled-icons/material/ThumbUp";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
  align-items: center;
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

const DownVoteIcon = styled(ThumbDown)`
  padding: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const UpVoteIcon = styled(ThumbUp)`
  padding: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const VotesText = styled.span`
  width: 40px;
  margin-right: auto;
`;

const SortByText = styled.span`
  margin-left: auto;
`;

const Button = styled.button`
  border: 0px;
  font-size: 20px;
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  margin: 5px;
  background-color: ${(props) => (props.active ? "#e7e7e7" : "black")};
  border: 1px solid ${(props) => (!props.active ? "#e7e7e7" : "black")};
  color: ${(props) => (!props.active ? "#e7e7e7" : "black")};
  border-radius: 3px;
`;

const formatVotes = (votes) => {
  if (votes === 0) return "";
  return `(${votes > 0 ? "+" : votes < 0 ? "-" : ""}${Math.abs(votes)})`;
};

const Story = ({
  story,
  activeStoryId,
  setActiveStoryId,
  hideStory,
  processVote,
}) => {
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
        <h2>{`${story.id}-${story.title} ${formatVotes(story.votes)}`}</h2>
        {activeStoryId !== story.id ? (
          <MoreIcon />
        ) : (
          <CloseIcon onClick={() => hideStory(story.id)} />
        )}
      </Row>
      {activeStoryId === story.id && (
        <>
          <Row>
            <p>{story.text}</p>
          </Row>
          <Row>
            <DownVoteIcon onClick={() => processVote("down", story.id)} />
            <UpVoteIcon onClick={() => processVote("up", story.id)} />
            <VotesText>{formatVotes(story.votes)}</VotesText>
          </Row>
        </>
      )}
    </ColumnSection>
  );
};

function Stories({ newsFeed }) {
  document.title = "final 5";
  const [stories, setStories] = React.useState(newsFeed);
  const [activeStoryId, setActiveStoryId] = React.useState(newsFeed[0].id);
  const [sortStoriesBy, setSortStoriesBy] = React.useState(null);

  const hideStory = (hideStoryId) => {
    const deleteIndex = stories.findIndex((s) => s.id === hideStoryId);
    const newStories = [...stories.filter((s) => s.id !== hideStoryId)];
    const nextIndex = newStories[deleteIndex]
      ? deleteIndex
      : newStories.length
      ? 0
      : null;
    setActiveStoryId(
      nextIndex || nextIndex === 0 ? newStories[nextIndex].id : null
    );
    setStories(newStories);
  };

  const processVote = (direction, storyId) => {
    const voteInteger = direction === "up" ? 1 : -1;
    setStories([
      ...stories.map((s) =>
        s.id === storyId ? { ...s, votes: s.votes + voteInteger } : s
      ),
    ]);
  };

  const sortStories = (sortBy) => {
    switch (sortBy) {
      case "most-popular":
        setStories([...stories.sort((a, b) => b.votes - a.votes)]);
        setSortStoriesBy("most-popular");
        break;
      case "least-popular":
        setStories([...stories.sort((a, b) => a.votes - b.votes)]);
        setSortStoriesBy("least-popular");
        break;
      default:
        setStories([...stories.sort((a, b) => a.id - b.id)]);
        setSortStoriesBy(null);
    }
  };

  return (
    <>
      <h2>News feed - final 5</h2>
      <Row>
        <SortByText>sort by:</SortByText>
        <Button active={!sortStoriesBy} onClick={() => sortStories()}>
          relevance
        </Button>
        <Button
          active={sortStoriesBy === "most-popular"}
          onClick={() => sortStories("most-popular")}
        >
          most popular
        </Button>
        <Button
          active={sortStoriesBy === "least-popular"}
          onClick={() => sortStories("least-popular")}
        >
          least popular
        </Button>
      </Row>
      {stories.length ? (
        stories.map((story) => {
          return (
            <Story
              story={story}
              key={story.id}
              activeStoryId={activeStoryId}
              setActiveStoryId={setActiveStoryId}
              hideStory={hideStory}
              processVote={processVote}
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
