import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, TitleBox } from './styles';
import {LogoGithub24, Wikis24 } from '@carbon/icons-react';
import './icon-style.css'


const Projects = ({ user }) => { 
    console.log(user);
    
    function getLinks(wb, gh) {
        if(wb.length > 0) {
            return (
                <>
                <a href={wb} target="_blank" className="link"
                    rel="noopener noreferrer" > <Wikis24  className="link-icon"/> </a>
                <a href={gh} target="_blank" className="link"
                    rel="noopener noreferrer"> <LogoGithub24 className="link-icon" /> </a>
                </>
            )
        } else {
            return <a href={gh} target="_blank" className="link" rel="noopener noreferrer"> <LogoGithub24 className="link-icon" /> </a>        
        }
    }

    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project, i) => (
                        <ProjectItem key={i}>
                            <TitleBox>
                                <ProjectTitle>{project.name}</ProjectTitle>
                                <div>
                                    {getLinks(project.website, project.githubUrl)}
                                </div>
                            </TitleBox>                            
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j)=> (
                                    <Pill key={j} >{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default Projects