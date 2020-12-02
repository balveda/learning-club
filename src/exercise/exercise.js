import React from "react";
import styled from "styled-components";

import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { ExpandLess } from "@styled-icons/material/ExpandLess";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  cursor: pointer;
`;

function Stories({ newsFeed }) {
  document.title = "** exercise";
  return (
    <>
      <h2>News feed - exercise</h2>
      {newsFeed.map((story) => {
        return (
          <Column key={story.id}>
            <Row>
              <h2>{story.title}</h2>
            </Row>
            <Row>
              <p>{story.text}</p>
            </Row>
          </Column>
        );
      })}
    </>
  );
}

export default Stories;
