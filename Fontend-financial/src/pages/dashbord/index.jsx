import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { useFinancialRecords } from '../../contexts/financial.comtext'
import AddRecordForm from './AddRecordForm';
import FinancialRecordTable from './FinancialRecordTable';

const Dashbord = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();
  console.log(user);
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div>Welcome {user?.firstName}! Here is your financial record:
      </div>
      <AddRecordForm />
      <div>
        Total Monthly: 0000฿
      </div>
      <FinancialRecordTable />
    </div>
  )
}

export default Dashbord;