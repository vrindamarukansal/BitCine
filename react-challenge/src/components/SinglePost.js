import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'

const SinglePost = props => {
    const {post} = props
    return (
        <Card className="mb">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {post.name}
                </Typography>
                <p>Height: {post.height}</p>
                <p>Mass: {post.mass}</p>
                <p>Birth Year: {post.birth_year}</p>
                <p>hair_color: {post.hair_color}</p>
                <p>skin_color: {post.skin_color}</p>
            </CardContent>
            
        </Card>
    )
}

SinglePost.propTypes = {
    post: PropTypes.object.isRequired
}

export default SinglePost
