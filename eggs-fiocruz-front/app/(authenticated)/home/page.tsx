'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { rem, ScrollArea, Flex } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import classes from './home.module.css';
import DragDropZone from '@/components/pages/home/DragDropZone';
import Toolbar from '@/components/ToolBar';
import { ListImages } from '@/components/ListImages';
import ImageCropper from '@/components/ImageCropper';

export default function Home() {
  const [images, setImages] = useState<FileWithPath[]>([]);
  const [selectedImage, setSelectedImage] = useState<FileWithPath>();

  const clearAllImages = useCallback(() => {
    setImages([]);
    setSelectedImage(undefined);
  }, []);

  useEffect(() => {
    if (images.length > 0 && !selectedImage) {
      setSelectedImage(images[0]);
    }
  }, [images, selectedImage]);

  return (
    <div className={classes.wrapper}>
      {
        images?.length <= 0 ? (
          <DragDropZone maxFiles={3} h={rem(250)} w={rem(750)} setImages={setImages} />
        ) : (
          <div>
            {selectedImage && <ImageCropper selectedImage={selectedImage} />}
            <div>
              <Toolbar clearAllImages={clearAllImages} />
              <ScrollArea type="hover">
                <Flex gap={24} p="xl">
                  <ListImages images={images} setSelectedImage={setSelectedImage} />
                </Flex>
              </ScrollArea>
            </div>
          </div>
        )
      }
    </div>
  );
}
