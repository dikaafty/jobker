import React from "react";
import { motion } from "framer-motion";

const transition = (OgComponent: React.FC): React.FC => {
  const TransitionComponent = (props: React.ComponentProps<typeof OgComponent>) => {
    return (
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          OgComponent,
          {...props}
        ),
        React.createElement(
          motion.div,
          {
            className: "slide-in",
            initial: { scaleX: 0 },
            animate: { scaleX: 0 },
            exit: { scaleX: 1 },
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
          }
        ),
        React.createElement(
          motion.div,
          {
            className: "slide-out-one",
            initial: { scaleX: 1 },
            animate: { scaleX: 0 },
            exit: { scaleX: 0 },
            transition: { duration: 2, ease: [0.22, 1, 0.36, 1] }
          }
        ),
        React.createElement(
          motion.div,
          {
            className: "slide-out-two",
            initial: { scaleX: 1 },
            animate: { scaleX: 0 },
            exit: { scaleX: 0 },
            transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
          }
        ),
        React.createElement(
          motion.div,
          {
            className: "slide-out-one",
            initial: { scaleX: 1 },
            animate: { scaleX: 0 },
            exit: { scaleX: 0 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }
        ),
      )
    )
  }

  return TransitionComponent;
}