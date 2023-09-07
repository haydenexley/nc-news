import React, { useEffect, useState } from 'react'
import {  getTopics } from './utils'
import { useNavigate } from 'react-router-dom'

const TopicsDropdown = ({topic, setTopic}) => {
const [topics, setTopics] = useState([])
const navigate = useNavigate()

const handleTopic = (event) => {
  event.preventDefault()
  setTopic(event.target.value)
  navigate(`/topics/${event.target.value}`)

}

useEffect(() => {
  getTopics(topic).then((data) => {
    const topicsList = data.map((topic) => topic.slug)
    setTopics(topicsList)
  })
}, []) 

  return <>
  <label htmlFor="topics">Topic:</label>
  <select value ={topic}name="topics" id="topics" onChange={handleTopic}>
    <option value='All' key='All'>All</option>
   {topics.map((topic_name) => {
        return <option key={topic_name} value={topic_name}>{topic_name}</option>
    })}
  </select>
</>
}

export default TopicsDropdown
