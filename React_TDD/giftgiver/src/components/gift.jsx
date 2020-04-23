import React, { Component } from 'react'
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'

export class Gift extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       person: '',
       present: '',
    }
  }
  

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl 
              className="input-person"
              onChange={event => this.setState({ person: event.target.value})}
            >
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl 
              className="input-present"
              onChange={event => this.setState({ present: event.target.value})}
            >
            </FormControl>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Gift
