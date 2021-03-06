/* Copyright 2018 Contributors to Hyperledger Sawtooth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
----------------------------------------------------------------------------- */


import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Container, Input, Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';


import './ApproverNav.css';
import NavList from './NavList';
import * as utils from '../../services/Utils';


/**
 *
 * @class         ApproverNav
 * @description   Component encapsulating the template for
 *                the sidebar displayed on the approver landing page
 *
 *
 */
export default class ApproverNav extends Component {

  static propTypes = {
    openProposalsCount:     PropTypes.number,
    recommended:            PropTypes.array,
    startAnimation:         PropTypes.func,
  };


  /**
   *
   * Render sidebar hierarchy
   *
   *
   *
   */
  renderLists () {
    const { openProposalsCount } = this.props;

    return (
      <div id='next-approver-nav-lists-container'>
        <NavList
          listTitle='Pending'
          labels={[
            openProposalsCount,
            null,
          ]}
          list={[
            'Individual',
            'About to Expire',
          ]}
          route='/approval/pending'/>
        <h4>
          <Link to='/approval/delegated'>
            Delegated
          </Link>
        </h4>
        <h4>
          <Link to='/approval/approved'>
            Approved
          </Link>
        </h4>
        <h4>
          <Link to='/approval/expired'>
            Expired
          </Link>
        </h4>
        <h4>
          <Link to='/approval/people'>
            People
          </Link>
        </h4>
        <h4>
          <Link to='/approval/manage'>
            Manage
          </Link>
        </h4>
      </div>
    );
  }


  render () {
    const { recommended, startAnimation } = this.props;

    const homeLink = recommended && recommended[0] ?
      `/roles/${utils.createSlug(recommended[0].name)}` :
      '/';

    return (
      <Container>

        <Search
          input={() => <Input icon='search' placeholder='Search...'/>}
          className='next-approver-nav-search'
          category
          loading={false}/>

        { this.renderLists() }

        <h4 id='next-approver-switch-container'>
          <Button
            icon
            as={Link}
            labelPosition='left'
            onClick={startAnimation}
            to={homeLink}>
            Switch to Requester
            <Icon name='left arrow'/>
          </Button>
        </h4>

      </Container>
    );
  }

}
