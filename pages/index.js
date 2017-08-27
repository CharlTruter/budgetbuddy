import Head from 'next/head'
import { Menu } from 'semantic-ui-react'

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <Menu>
      <Menu.Item>
        BudgetBuddy
      </Menu.Item>
      <Menu.Menu position='right'>
      <Menu.Item>
        Sign Up
      </Menu.Item>
      <Menu.Item>
        Log In
      </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
)