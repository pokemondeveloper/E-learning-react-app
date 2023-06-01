//Import Images
import react from "./img2/react1.jpg";
import react2 from "./img2/react2.jpg";
import js from "./img2/js1.jpg";
import js2 from "./img2/js2.jpg";
import soon from "./img2/soon1.jpg";
import soon2 from "./img2/soon2.jpg";

export const CourseState = () => {
  return [
    {
      title: "Interaktiv React va Redux",
      mainImg: js2,
      secondaryImg: js,
      url: "/courses/react",
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Tez kunda",
      mainImg: soon,
      url: "/courses/soon",
      secondaryImg: soon2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Interaktiv JavaScript",
      mainImg: react,
      url: "/courses/javascript",
      secondaryImg: react2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
