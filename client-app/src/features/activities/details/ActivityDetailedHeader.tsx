import { observer } from 'mobx-react-lite';
import {Button, Header, Item, Segment, Image, Label} from 'semantic-ui-react'
import {Activity} from "../../../app/models/activity";
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { useStore } from '../../../app/stores/store';

const activityImageStyle = {
    filter: 'brightness(30%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    activity: Activity
}

export default observer (function ActivityDetailedHeader({activity}: Props) {
    const defaultCategories = ['culture', 'drinks', 'film', 'food', 'music', 'travel']

    const url_img =
    defaultCategories.includes(activity.category.toLocaleLowerCase()) ? 
    `/assets/categoryImages/${activity.category.toLocaleLowerCase()}.jpg` 
    : '/assets/categoryImages/none.jpg'

    const {activityStore: {updateAttendance, loading, cancelActivityToggle}} = useStore();
    return (
        <Segment.Group>
            {activity.isCancelled &&
                <Label style = {{position: 'absolute', zIndex: 1000, left: -14, top: 20}}
                    ribbon color='red' content='Cancelled'/>
            }
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={url_img} fluid style={activityImageStyle}/>
                <Segment style={activityImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={activity.title}
                                    style={{color: 'white'}}
                                />
                                <p>{format (activity.date!, 'dd MMM yyyy')}</p>
                                <p>
                                    {'Hosted by '}
                                    <strong> 
                                        <Link 
                                            to={`/profile/${activity.host?.displayName}`}>
                                            {activity.host?.displayName}
                                        </Link> 
                                    </strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                {activity.isHost ? (
                    <>
                        <Button 
                            color={activity.isCancelled ? 'green' : 'red'}
                            loading={loading} 
                            onClick={cancelActivityToggle} 
                            floated='left'
                            basic
                            content={activity.isCancelled ? 'Re-activate activity' : 'Cancel activity'}
                        />
                        <Button 
                            disabled={activity.isCancelled}
                            as={Link} 
                            to={`/manage/${activity.id}`} 
                            color='orange' 
                            floated='right'
                            content= 'Manage Event'
                        />
                        
                    </>
                    
                ) : activity.isGoing ? (
                    <Button loading = {loading} onClick={updateAttendance}>Cancel attendance</Button>
                ) : (
                    <Button 
                        disabled={activity.isCancelled}
                        loading = {loading} 
                        color='teal' 
                        onClick={updateAttendance}
                        content='Join Activity'
                    />
                )}    
            </Segment>
        </Segment.Group>
    )
})