import React from 'react';
import {
  Box, Button, Divider, Stack, Typography,
} from '@mui/material';

type AdminContainerProps = {
  headerText: string,
  children: React.ReactNode,
  buttonHandler: () => void
}
const AdminContainer = ({ headerText, children, buttonHandler }:AdminContainerProps) => {
  return (
    <Box>
      <Stack flexDirection="row" columnGap={1} alignItems="center" padding={1}>
        <Typography variant="h6">
          {headerText}
        </Typography>
        <Button onClick={() => buttonHandler()}>Создать</Button>
      </Stack>
      <Divider />
      <Box>
        { children }
      </Box>
    </Box>
  );
};

export default AdminContainer;
