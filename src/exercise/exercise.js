import React from "react";
import styled from "styled-components";

import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { ExpandLess } from "@styled-icons/material/ExpandLess";
import { ThumbDown } from "@styled-icons/material/ThumbDown";
import { ThumbUp } from "@styled-icons/material/ThumbUp";
import { Close } from "@styled-icons/material/Close";

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

function Stories({ newsFeed }) {
  document.title = "** exercise";
  return (
    <>
      <h2>News feed - exercise</h2>
      {newsFeed.map((story) => {
        return (
          <ColumnSection key={story.id}>
            <Row>
              <h2>{story.title}</h2>
            </Row>
            <Row>
              <p>{story.text}</p>
            </Row>
          </ColumnSection>
        );
      })}
    </>
  );
}

export default Stories;
