import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { ProjectItem, ProjectTitle, TitleBox } from '../Projects/styles';
import { Wikis24 } from '@carbon/icons-react';
import '../Projects/styles'


const Product = ({ user }) => { 
    console.log(user.publications);
    
    function getLinks(wb) {
        if(wb.length > 0) {
            return (
                <>
                <a href={wb} target="_blank" className="link"
                    rel="noopener noreferrer" > <Wikis24  className="link-icon"/> </a>
                </>
            )
        }
    }

    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Product Portfolio</SectionTitle>
                <ul>
                    {user.publications.map((project, i) => (
                        <ProjectItem key={i}>
                            <TitleBox>
                                <ProjectTitle>{project.name}</ProjectTitle>
                                <div>
                                    {getLinks(project.website)}
                                </div>
                            </TitleBox>                            
                            <p>{project.summary}</p>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default Product