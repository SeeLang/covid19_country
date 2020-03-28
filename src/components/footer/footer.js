import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Grid} from "semantic-ui-react"

const Footer = () => {
    return (
        <footer  style={{
            background: `orange`,
            marginBottom: `1.45rem`,
            marginTop:`1.45rem`,
            fontSize: `10px`
          }}
        >
        <Grid columns='equal'>
            <Grid.Row columns={2} style={{padding:`0.1rem`}}>
                <Grid.Column style={{paddingLeft:`1.45rem`}}>
                    Developed by : Tharindu Peiris
                </Grid.Column>
                <Grid.Column textAlign='right' style={{paddingRight:`1.45rem`}}>
                    © {new Date().getFullYear()}, Powered by
                    {` `}
                    <a href="#">Project_name</a>  
                </Grid.Column>
               
            </Grid.Row>
        </Grid>

      </footer>
    )
}

export default Footer