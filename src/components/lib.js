import React from "react";
import styled from "styled-components";

import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { ExpandLess } from "@styled-icons/material/ExpandLess";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreIcon = styled(ExpandMore)`
  padding: 5px;
  margin-left: auto;
`;
const LessIcon = styled(ExpandLess)`
  padding: 5px;
  margin-left: auto;
`;

module.exports = { Row, Column, MoreIcon, LessIcon };
