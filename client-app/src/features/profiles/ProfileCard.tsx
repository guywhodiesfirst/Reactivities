import { observer } from "mobx-react-lite"
import { Profile } from "../../app/models/profile"
import { Link } from "react-router-dom"
import { Card, Icon, Image } from "semantic-ui-react"

interface Props {
    profile: Profile
}

export default observer (function ProfileCard({profile} : Props) {
    return(
        <Card as={Link} to={`/profiles/${profile.username}`}>
            <Image src={profile.image || '/assets/user.png'}/>
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>There will be bio</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user'/>
                20 followers
            </Card.Content>
        </Card>
    )
})