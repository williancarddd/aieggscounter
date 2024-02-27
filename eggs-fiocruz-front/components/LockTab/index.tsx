'use client';

import { Container, Flex, Title } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

export default function LockTab() {
  return (
    <Container p={20}>
      <Flex w="100%" mt="50px" justify="center" direction="column" gap={10} align="center">
          <IconLock color="#777" size={60} />
          <Title c="#777" order={1}>This functionality is not yet available</Title>
      </Flex>
    </Container>
  );
}
