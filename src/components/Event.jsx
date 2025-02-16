import PropTypes from "prop-types"
import styled from "styled-components"
import { MdAccessTime, MdLocationOn, MdPerson } from "react-icons/md"

const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const EventTitle = styled.h3`
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 1.2rem;
`

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  color: #666;
  font-size: 0.9rem;

  svg {
    margin-right: 8px;
    color: #3498db;
  }
`

const Event = ({ name, start, end, location, speaker }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <EventCard>
      <EventTitle>{name}</EventTitle>
      <EventInfo>
        <MdAccessTime />
        {formatDate(start)} - {formatDate(end)}
      </EventInfo>
      <EventInfo>
        <MdLocationOn />
        {location}
      </EventInfo>
      <EventInfo>
        <MdPerson />
        {speaker}
      </EventInfo>
    </EventCard>
  )
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
}

export default Event

