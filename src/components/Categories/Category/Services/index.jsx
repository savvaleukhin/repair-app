import React from 'react';
import ServiceItem from './ServiceItem';

const Services = ({ services }) => {
  return (
    <section>
      {services.map(service => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </section>
  );
};

export default Services;
