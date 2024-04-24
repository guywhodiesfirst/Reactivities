import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
    ButtonGroup,
    Button,
  } from 'semantic-ui-react'
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default observer (function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if(id) loadActivity(id);
    }, [id, loadActivity])

    if(loadingInitial || !activity) return <LoadingComponent/>;

    const defaultCategories = ['culture', 'drinks', 'film', 'food', 'music', 'travel']
    if(!activity) return <LoadingComponent/>;

    const url_img =
    defaultCategories.includes(activity.category.toLocaleLowerCase()) ? 
    `/assets/categoryImages/${activity.category.toLocaleLowerCase()}.jpg` 
    : '/assets/categoryImages/none.jpg'

    return(
        <Card fluid>
            <Image src={url_img}/>
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths='2'>
                    <Button as={Link} to={`/manage/${activity.id}`} basic color='violet' content='Edit'/>
                    <Button as={Link} to={`/activities`} basic color='grey' content='Cancel'/>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
})
