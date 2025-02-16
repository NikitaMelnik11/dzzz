import PropTypes from "prop-types"
import styled from "styled-components"
import Event from "./Event"

const BoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const BoardTitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
`

const EventsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PageBoard = ({ events }) => {
  return (
    <BoardContainer>
      <BoardTitle>Upcoming Events</BoardTitle>
      <EventsGrid>
        {events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </EventsGrid>
    </BoardContainer>
  )
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default PageBoard

