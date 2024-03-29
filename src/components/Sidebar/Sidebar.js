import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {SideNavItems, SideNavLink} from 'carbon-components-react/lib/components/UIShell';

import {StyledSideNav} from './styles';

const items = [
    {name: 'Me', path: '/'},
    {name: 'Work', path: '/work'},
    {name: 'Dev Projects', path: '/projects'},
    {name: 'Product Portfolio', path: '/product'},
    {name: 'Education', path: '/education'}
]

const Sidebar = () => {
    const location = useLocation();

    return (
        <StyledSideNav isFixed expanded isChildOfHeader={false} aria-label="Side Navigation">
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                        isActive={
                            location.pathname === '/' && i.path==='/'? true : location.pathname === i.path
                        }
                        element={Link}
                        to={i.path}
                        key={i.name}
                    >
                        {i.name}
                    </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    )
}

export default Sidebar;
