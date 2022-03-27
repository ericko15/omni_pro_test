import {useState} from 'react'

import Tabs from '../components/molecules/Tabs'
import LoginTab from '../components/organisms/LoginTab'
import RegisterTab from '../components/organisms/RegisterTab'

const tabs = [
  {
    title: 'Ingreso'
  },
  {
    title: 'Registro'
  }
]

const Auth = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChangeTab = (tab) => setActiveTab(tab)

  return (
    <Tabs tabs={tabs} active={activeTab} onClick={handleChangeTab}>
      {
        activeTab === 0 && (
          <LoginTab/>
        )
      }
      {
        activeTab === 1 && (
          <RegisterTab/>
        )
      }
    </Tabs>
  )
}

export default Auth
