import React from 'react'

import BudgetHeaderView from '../containers/BudgetHeaderView'
import SpendingFormView from '../containers/SpendingFormView'
import SpendingsView from '../containers/SpendingsView'

export default function StartPage() {
  return (
    <React.Fragment>
      <BudgetHeaderView />
      <SpendingsView />
      <SpendingFormView />
    </React.Fragment>
  )
}
