import { Box, Image, Text } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';

interface Props {
  images: FileWithPath[];
  setSelectedImage: (image: FileWithPath) => void;
}

export function ListImages({ images, setSelectedImage }: Props) {
  return (
    <>
     {images?.map((image, index) => (
    <Box key={index} onClick={() => setSelectedImage(image)}>
      <Text size="md">
        {image.name.slice(0, 15)}...
      </Text>
      <Image
        radius="sm"
        height={150}
        width={150}
        fit="contain"
        src={URL.createObjectURL(image)}
        style={{ cursor: 'pointer' }}
      />
    </Box>))}
    </>
  );
}
