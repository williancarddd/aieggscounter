'use client';

import { Flex, Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, FileWithPath, MIME_TYPES } from '@mantine/dropzone';

interface Props extends Partial<DropzoneProps> {
  setImages: (files: FileWithPath[]) => any
}
export default function DragDropZone({ setImages, ...props }: Props) {
  return (
    <Dropzone
      onDrop={(files) => setImages(files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={[
        MIME_TYPES.png,
        MIME_TYPES.jpeg,
      ]}
      {...props}
    >
      <Group justify="center" gap="xl" style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <Flex gap="lg">
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
              stroke={1.5}
            />
            <div>
              <Text size="xl" inline>
                Tipo de arquivo não suportado
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Solte imagens do tipo png e jpg.
              </Text>
            </div>
          </Flex>
        </Dropzone.Reject>
        <Dropzone.Idle>
          <Flex gap="lg">
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
              stroke={1.5}
            />
            <div>
              <Text size="xl" inline>
                Solte as imagens de paleta de alcatex aqui.
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Solte até {props.maxFiles} imagens aqui, não pode exceder 2 mb.
              </Text>
            </div>
          </Flex>
        </Dropzone.Idle>
      </Group>
    </Dropzone>
  );
}
