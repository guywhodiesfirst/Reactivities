import { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import NavBar from './navbar.tsx';
import LoadingComponent from './LoadingComponent.tsx';
import { useStore } from '../stores/store.ts';
import { observer } from 'mobx-react-lite';


function App() {
  const {activityStore} = useStore();

  useEffect(() =>{
    activityStore.loadActivities();
  }, [activityStore])


  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app...'/>

  return (
    <>
      <NavBar/>

      <Container style={{marginTop: '6em'}}>
        <ActivityDashboard/>
      </Container>

    </>
  )
}

export default observer(App);
