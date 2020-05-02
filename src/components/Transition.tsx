import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const Transition = ({ children, location }) => {
  const timeout = 1000
  const getTransitionStyles = {
    entering: {
      position: `absolute`,
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 0,
    },
  }
  return (
    <div>
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{ enter: timeout, exit: timeout }}
        >
          {status => (
            <div style={{ ...getTransitionStyles[status] }}>{children}</div>
          )}
        </ReactTransition>
      </TransitionGroup>
    </div>
  )
}

export default Transition
