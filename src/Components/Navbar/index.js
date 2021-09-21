import React from 'react'
import { Container, Wrapper, Left, Right, Center, Language, SearchContainer, Input, Logo, MenuItem } from './NavBarStyles'
import { Search,  ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color: "gray", fontSize: 16}} /> 
                    </SearchContainer>
                </Left>
                <Center>
                   <Logo>CONSONANT.</Logo>
                </Center>
                <Right>
                   <MenuItem>Register</MenuItem>
                   <MenuItem>Sign In</MenuItem>
                   <MenuItem>
                   <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>  
                   </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
