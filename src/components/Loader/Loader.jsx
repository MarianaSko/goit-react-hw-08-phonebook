import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingTriangles
        visible={true}
        height="280"
        width="280"
        color="#4d4ae8"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};

export default Loader;
