import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';

function MyDatePicker() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MantineProvider>
      <DatePicker value={value} onChange={setValue} />
    </MantineProvider>
  );
}

export default MyDatePicker;
