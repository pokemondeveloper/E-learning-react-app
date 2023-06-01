import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CourseState } from "../courseState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const CourseDetail = () => {
  const history = useHistory();
  // console.log(history);
  const url = history.location.pathname;
  const [courses, setMovies] = useState(CourseState);
  const [course, setCourse] = useState(null);

  // useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  return (
    <>
      {course && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="laptop" />
          </HeadLine>
          <Awards>
            {course.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="laptop" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background-color: #30bee1;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default CourseDetail;
