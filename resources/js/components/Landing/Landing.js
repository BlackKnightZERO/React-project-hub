import React from "react"
import { Stack, Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard'

const Landing = () => {
    return (
        <>
            {/* <Stack gap={4}> */}
                <div className="bg-white">
                    <Stack gap={3} className="m-3 col-md-5 mx-auto">
                        
                        <Stack direction direction="horizontal" gap={4}>
                            <ProjectCard
                                title="Birthday App"
                                description="See who has birthdays"
                                addons={ new Date().toDateString() }
                                url="/birthday-app"
                            />
                            <ProjectCard
                                    title="Tour App"
                                    description="Find your next travel destination"
                                    addons=""
                                    url="/birthday-app"
                                />
                        </Stack>

                        <Stack direction direction="horizontal" gap={4}>
                                <ProjectCard
                                    title="Keep Notes"
                                    description="Google keep clone"
                                    addons="multi-purpose listed items"
                                    url="/keep-app"
                                />
                            <ProjectCard
                                    title="Tour App"
                                    description="Find your next travel destination"
                                    addons=""
                                    url="/birthday-app"
                                />
                        </Stack>

                    </Stack>
                </div>
            {/* </Stack> */}
        </>
    )
}

export default Landing