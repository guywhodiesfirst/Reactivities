import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 30}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' color="blue" content="Create activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}