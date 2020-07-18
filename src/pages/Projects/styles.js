import styled from 'styled-components';
import { white } from '@carbon/colors';

export const ProjectItem = styled.li`
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${white}
`

export const ProjectTitle = styled.h4`
    font-weight: bold;
`

export const SkillContainer = styled.div`
    margin-top: 1.2rem
`

export const LinkBox = styled.div`    
    display: flex;
    justify-content: space-between;    
    margin: .5rem 0;
    max-width: 5%;
`

export const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`