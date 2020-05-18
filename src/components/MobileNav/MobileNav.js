import React from 'react';
import {User32, Code32, Portfolio32, Education32} from '@carbon/icons-react';

import {Container, Spacer, NavWrapper, NavButton, NavLink} from './styles';

const items = [
    {description : 'Me', icon : User32, link: '/'},
    {description: 'Projects', icons: Code32, link: '/projects'},
    {description: 'Portfolio', icons: Portfolio32, link: 'work'},
    {description: 'Education', icons: Education32, link: '/education'}
]

const MobileNav = () => {
    return(
        <Container>
            <Spacer />
            <NavWrapper>
                {items.map(i => (
                    <NavLink to={i.link}>
                        <NavButton
                            hasIconOnly
                            renderIcon={i.icon}
                            iconDescription={i.description}
                            toolTipPosition='bottom'
                        >
                        </NavButton>
                    </NavLink>
                ))}
            </NavWrapper>
        </Container>
    )
}

export default MobileNav;