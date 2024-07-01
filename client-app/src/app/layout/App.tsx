import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import NavBar from './navbar.tsx';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage.tsx';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store.ts';
import { useEffect } from 'react';
import LoadingComponent from './LoadingComponent.tsx';
import ModalContainer from '../common/modals/ModalContainer.tsx';


function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore()

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app...'/>

  return (
    <>
      <ModalContainer/>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {location.pathname === '/' ? <HomePage/> : (
        <>
            <NavBar/>
            <Container style={{marginTop: '6em'}}>
              <Outlet/>
            </Container>
        </>
      )}
    </>
  )
}

export default observer(App);
