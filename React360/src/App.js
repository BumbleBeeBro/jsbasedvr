import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './components/navigation';
import Scene from './three-scene/scene';

class App extends Component {
  state = {
    demoId: null,
    isLoading: false
  };

  scene = new Scene();

  //initiate application and show demo options
  handleRef = el => {
    if (el) {
      const actions = {
        toggleLoading: this.toggleLoading
      };

      this.scene.init(el, actions);
    }
  };

  //load a demo into the scene
  handleLoad = demoId => {
    this.setState({ demoId }, () => {
      this.scene.loadDemo(demoId);
    });
  };

  //remove a demo from the scene
  clearDemo = () => {
    this.setState({ demoId: null });
  };


  toggleLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <Navigation onLoad={this.handleLoad} clearDemo={this.clearDemo} isLoading={isLoading} />

        <OrbitIcon />

        <Placeholder innerRef={this.handleRef} />
      </div>
    );
  }
}

export default App;

const Placeholder = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Info = styled.div`
  font-size: 16px;
  color: #e0e0e0;
  width: 100vw;
  height: 100px;
  pointer-events: none;
  box-sizing: border-box;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
`;

const OrbitIcon = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 15px;
  right: 15px;
  pointer-events: none;
  background: url(${require('./assets/orbit.svg')}) no-repeat;
  background-size: contain;
`;
