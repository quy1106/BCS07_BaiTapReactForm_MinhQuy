import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Table from './Table'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Form/>
        <Table/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(Home)