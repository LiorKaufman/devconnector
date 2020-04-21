import React from 'react';
import { connect } from 'react-redux';

export const Dashboard = () => {
  return (
    <>
      <div className='container'>Dashboard</div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
