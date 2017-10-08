import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

export default function EmptyContent() {
  return (
    <ContentContainer className="empty">
      <div className="empty-icon">
        <i className="icon icon-3x icon-emoji" />
      </div>
      <p className="empty-title h5">Select an observable</p>
      <p className="empty-subtitle">Click on an observable from the sidebar</p>
    </ContentContainer>
  );
}