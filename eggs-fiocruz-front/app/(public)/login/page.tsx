'use client';

import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Image,
  Center,
  Alert,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from './login.module.css';
import { useStoreActions } from '@/hooks/storeHooks';
import { LoginForm } from '@/shared/types/forms/login';

export default function LoginPage() {
  const { push } = useRouter();
  const [invalidAuth, setInvalidAuth] = useState(false);
  const [loading, toggle] = useState(false);
  const { handleUserLogin } = useStoreActions((actions) => actions.login);
  const form = useForm<LoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (!value.length ? 'Esse campo é obrigatório.' : null),
      password: (value) => (!value.length ? 'Esse campo é obrigatório.' : null),
    },
  });
  async function handleAuth(formData: LoginForm) {
    try {
      toggle(true);
      setInvalidAuth(false);
      await handleUserLogin(formData);
      toggle(false);
      push('/home');
    } catch (e) {
      toggle(false);
      setInvalidAuth(true);
    }
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Center>
          <Image alt="Fiocruz Logo" w={250} src="https://www.rondonia.fiocruz.br/wp-content/themes/fiocruz/img/fiocruz.png" style={{ backgroundColor: 'green', borderRadius: 12 }} />
        </Center>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Bem Vindo
        </Title>
        {invalidAuth && (
          <Alert
            variant="light"
            color="pink"
            title="Credenciais inválidas."
            icon={<IconInfoCircle />}
          />
        )}
        <form onSubmit={form.onSubmit(handleAuth)}>
          <TextInput
            label="Endereço de Email"
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Senha"
            placeholder="sua senha"
            mt="md"
            size="md"
            {...form.getInputProps('password')}
          />
          <Button loading={loading} type="submit" fullWidth mt="xl" size="md">
            Entrar
          </Button>
        </form>

        <Text ta="center" mt="md">
          Não tem uma conta?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Registrar
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
