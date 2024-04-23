import React from "react";
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    ButtonGroup,
    Button,
  } from 'semantic-ui-react'
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;
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
                    <Button onClick={() => openForm(activity.id)} basic color='violet' content='Edit'/>
                    <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel'/>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}
