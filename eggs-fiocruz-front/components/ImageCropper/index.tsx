// ImageCropper.js
import React from 'react';
import { Paper, Image } from '@mantine/core';
import { Cropper, Rotate } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { FileWithPath } from '@mantine/dropzone';

interface Props {
  selectedImage: FileWithPath;
}

const ImageCropper = ({ selectedImage }: Props) => (
    <Paper
      w="60vw"
      h="75vh"
    >
      <Image
        src={URL.createObjectURL(selectedImage)}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: 16 / 9,
        }}
      />
    </Paper>
  );

export default ImageCropper;
