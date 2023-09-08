import React, { useEffect, useState } from 'react'
import {  getTopics } from './utils'
import { useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

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

  return (<>
        <FormControl fullWidth>
        <InputLabel>Topics</InputLabel>
        <Select
          label="topics" value ={topic}name="topics" id="topics" onChange={handleTopic}
        >
          <MenuItem value='All' key='All'>all</MenuItem>
          {topics.map((topic_name) => {
        return <MenuItem key={topic_name} value={topic_name}>{topic_name}</MenuItem>
    })}
        </Select>
      </FormControl>
      </>
  )
}

export default TopicsDropdown
