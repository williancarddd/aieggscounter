import { Grid, GridCol, Tabs, TabsList, TabsPanel, TabsTab, rem } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

export default function Settings() {
  const iconStyle = { width: rem(14), height: rem(14) };

  return (
    <Grid p="10px 0px">
      <GridCol>
        <Tabs variant="default" color="violet" defaultValue="general">
          <TabsList grow>
            <TabsTab value="general" leftSection={<IconSettings style={iconStyle} />}>
              Algo de Configuração
            </TabsTab>
          </TabsList>
          <TabsPanel value="general">
            dasd
          </TabsPanel>
        </Tabs>
      </GridCol>
    </Grid>
  );
}
