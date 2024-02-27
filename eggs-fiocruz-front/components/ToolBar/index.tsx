import React from 'react';
import { Group, ThemeIcon, Tooltip, rem } from '@mantine/core';
import { IconCloudUpload } from '@tabler/icons-react';
import { TrashIcon } from '@modulz/radix-icons';

interface Props {
  clearAllImages: () => void;
}

const Toolbar = ({ clearAllImages }: Props) => (
    <Group gap={24} p={8}>
      <ThemeIcon
        size={32}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <Tooltip label="Upload images">
          <IconCloudUpload style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
        </Tooltip>
      </ThemeIcon>
      <Tooltip label="Remove all images">
        <TrashIcon
          color="red"
          style={{ width: rem(26), height: rem(26) }}
          onClick={clearAllImages}
        />
      </Tooltip>
    </Group>
  );

export default Toolbar;
