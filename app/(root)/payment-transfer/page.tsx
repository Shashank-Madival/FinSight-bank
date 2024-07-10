import PayementTransferForm from '@/components/PayementTransferForm'
import HeaderBox from '@/components/ui/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if(!accounts) return;
  const accountsData =accounts?.data;
  return (
    <section className="payement-transfer pl-5 pt-5">
      <HeaderBox 
        title="Payment Transfer "
        subtext="Please provide any specific details or notes releted to the payement transfer "
      />

      <section className="size-full pt-5">
        <PayementTransferForm accounts={accountsData}/>
      </section>
    </section>
  )
}

export default Transfer