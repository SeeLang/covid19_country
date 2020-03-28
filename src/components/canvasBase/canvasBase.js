import React from "react"
import {Grid, Segment,Header} from "semantic-ui-react"


const CanvasBase = () =>{
    return (
    <Grid columns={1}>
        <Grid.Row>
            <Grid.Column>
                <Segment>
                    <Header as='h4'>Project Name</Header>
                </Segment>
                <Segment style={{height:'460px',width:'930px'}}>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )

}

export default CanvasBase