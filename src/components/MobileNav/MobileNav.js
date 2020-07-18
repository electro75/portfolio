import React from 'react';
import {User32, Code32, Portfolio32, Education32} from '@carbon/icons-react';

import {Container, Spacer, NavWrapper, NavButton, NavLink} from './styles';

const items = [
    {description : 'Me', icon : User32, link: '/'},
    {description: 'Projects', icon: Code32, link: '/projects'},
    {description: 'Portfolio', icon: Portfolio32, link: '/work'},
    {description: 'Education', icon: Education32, link: '/education'}
]

const MobileNav = () => {
    return(
        <Container>
            <Spacer />
            <NavWrapper>
                {items.map((i, index) => (
                    <NavLink to={i.link} key={index} >
                        <NavButton
                            hasIconOnly
                            renderIcon={i.icon}
                            iconDescription={i.description}                            
                        >
                        </NavButton>
                    </NavLink>
                ))}
            </NavWrapper>
        </Container>
    )
}

export default MobileNav;