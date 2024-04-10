import React from "react";
import { MenuItem, Menu, Container, Button } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm} : Props) {
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 30}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={openForm} color="blue" content="Create activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}