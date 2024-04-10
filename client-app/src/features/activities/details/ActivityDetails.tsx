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
import { Activity } from "../../../app/models/activity";

  interface Props {
    activity: Activity,
    cancelSelectedActivity: () => void;
    openForm: (id: string) => void; 
  }
export default function ActivityDetails({activity, cancelSelectedActivity, openForm} : Props){
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category.toLocaleLowerCase()}.jpg`}/>
            <CardContent>
                <CardHeader>Matthew</CardHeader>
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
