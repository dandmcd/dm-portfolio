import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const Transition = (props: {
  children: React.ReactNode
  location: Location
}): JSX.Element => {
  const timeout = 200
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
          key={props.location.pathname}
          timeout={{ enter: timeout, exit: timeout }}
        >
          {(status) => (
            <div style={{ ...getTransitionStyles[status] }}>
              {props.children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    </div>
  )
}

export default Transition
