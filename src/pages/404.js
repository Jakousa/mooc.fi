import React from "react";
import withLayout from "../layout/withLayout";
import Header from "../components/Header";
import Container from "../components/Container";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import LanguageContext, { languages } from "../contexes/LanguageContext";

const StyledContainer = styled(Container)`
  margin-top: 5rem;
`;

const StyledTypography = styled(Typography)`
  margin: 2rem !important;
  text-align: center;
`;

const NotFoundPage = () => (
  <LanguageContext.Consumer>
    {language => (
      <StyledContainer>
        <Header variant="h3">
          {language === languages.finnish
            ? "Sivua ei löytynyt"
            : "Page not found"}
        </Header>
        <StyledTypography variant="subtitle1">
          {language === languages.finnish ? (
            <div>
              Etsimääsi sivua ei ole olemassa, tai se on poistettu.
            </div>
          ) : (
            <div>
              The page you wanted doesn't exist, or it has been deleted.
            </div>
          )}
        </StyledTypography>
        <StyledTypography>
          <a href="/">{language === languages.finnish ? "Kotisivu" : "Homepage"}</a>
        </StyledTypography>
      </StyledContainer>
    )}
  </LanguageContext.Consumer>
);

export default withLayout(NotFoundPage);
