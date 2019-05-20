import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SystemAlertsWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: 1000;
`;

class SystemAlerts extends PureComponent {
  render() {
    return (
      <SystemAlertsWrapper key="SystemAlerts">
        <div>System alert</div>
      </SystemAlertsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(SystemAlerts);
