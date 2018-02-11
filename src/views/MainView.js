import { h, app } from "hyperapp"
import { Route } from "@hyperapp/router"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import HomeView from './HomeView'
import ComponentsView from './ComponentsView'
import AppView from './AppView'

export default (state, actions) => (
  <div>
    <Navbar />
    <Route path='/' render={() => <Hero color='primary' title='HyperBulma' subtitle='A Hyperapp Starter Using Bulma CSS' />} />
    <Route path="/" render={HomeView} />
    <Route path="/components" render={ComponentsView} />
    <Route path="/app" render={AppView} />
    <Footer>
      <strong>HyperBulma</strong> by <a href="https://steemit.com/@cutemachine">@cutemachine</a>.
    </Footer>
  </div>
)
