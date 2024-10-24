import React from 'react';

const ServiceDetails = ({ serviceName }) => {
  return (
    <div>
      <h2>{serviceName} Service</h2>
      <p>Details about {serviceName} services at Innomatics Research Labs.</p>
    </div>
  );
};

export default ServiceDetails;
