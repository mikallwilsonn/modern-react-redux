import React from 'react';
import useResources from './useResources';



const ResourceList = ({ resource }) => {

    const resources = useResources( resource );

    const renderResourceList = () => {
        return resources.map(resource => {
            return <li key={resource.id}>{resource.title}</li>
        });
    }


    return (
        <div>
            Resource List: ( {resources.length} {resource} )
            <ul>
                {renderResourceList()}
            </ul>
        </div>
    );

}


export default ResourceList;
