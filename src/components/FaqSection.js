import React from "react";
// import styles
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>

      <Toggle title="How do I start?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              adipisci.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Daily schedule?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              adipisci.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Different payment methods?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              adipisci.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="What products do you offer?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              adipisci.
            </p>
          </div>
        </div>
      </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;

export default FaqSection;
