import { Flex, Avatar, Text } from '@mantine/core';

interface Props {
  info: {
    name: string;
    email: string;
    photo?: string;
  }
}
export function AvatarUser({ info }: Props) {
  return (
    <Flex
      direction="row"
      gap={4}
      style={{
      width: '100%',
    }}
    >
      <Avatar src={info.photo ?? null} alt="no image here" />
      <Flex justify="center" align="baseline" direction="column">
        <Text fw={700}>{info.name}</Text>
        <Text size="sm" fw={400}>{info.email}</Text>
      </Flex>
    </Flex>
  );
}
