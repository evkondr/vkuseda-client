import React, { useState } from 'react';
import AdminContainer from '../AdminContainer/AdminContainer';
import DailyMenuContainer from '../DailyMenu/DailyMenuContainer';
import AddDayModal from '../DailyMenu/AddDayModal';

const DailyMenuPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AdminContainer headerText="Ежедневное меню" buttonHandler={() => setOpen(true)}>
      <DailyMenuContainer />
      <AddDayModal open={open} onClose={() => setOpen(!open)} />
    </AdminContainer>
  );
};

export default DailyMenuPage;
