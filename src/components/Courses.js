import React, { Fragment } from "react";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";

import LanguageContext, { languages } from "../contexes/LanguageContext";
import Header from "./Header";

const CoursesWrapper = styled.div`
  padding-top: 5rem;
  background-color: white;
  margin: 0 auto;
`;

const CourseGrid = styled.div`
  margin: 0 auto;
  width: fit-content;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 720px) {
    width: 80%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1100px) {
    width: 80%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1200px;
  }
`;

export default ({ courses }) => {
  const { upcomingCourses, ongoingCourses, pastCourses } = courses;
  return (
    <LanguageContext.Consumer>
      {language => (
        <Fragment>
          <CoursesWrapper>
            <Header variant="h3">
              {language === languages.finnish ? "Kurssit" : "Courses"}
            </Header>
            <CourseGrid>
              {ongoingCourses.map(course => (
                <CourseCard
                  key={course.name}
                  name={course.name}
                  description={course.description}
                  image={course.image}
                  href={course.href}
                />
              ))}
            </CourseGrid>
          </CoursesWrapper>
          {upcomingCourses && upcomingCourses.length > 0 && (
            <CoursesWrapper>
              <Header variant="h3">
                {language === languages.finnish ? "Tulossa" : "Coming up"}
              </Header>
              <CourseGrid>
                {upcomingCourses.map(course => (
                  <CourseCard
                    key={course.name}
                    name={course.name}
                    description={course.description}
                    image={course.image}
                    href={course.href}
                    disabled={
                      course.disabled === undefined ? true : course.disabled
                    }
                  />
                ))}
              </CourseGrid>
            </CoursesWrapper>
          )}
          {pastCourses && pastCourses.length > 0 && (
            <CoursesWrapper>
              <Header variant="h3">
                {language === languages.finnish
                  ? "Vanhat kurssit"
                  : "Old courses"}
              </Header>
              <CourseGrid>
                {pastCourses.map(course => (
                  <CourseCard
                    key={course.name}
                    name={course.name}
                    description={course.description}
                    image={course.image}
                    href={course.href}
                  />
                ))}
              </CourseGrid>
            </CoursesWrapper>
          )}
        </Fragment>
      )}
    </LanguageContext.Consumer>
  );
};
