import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent,Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const PostList = props => {
    const {post, key} = props
    const link = '/people/'+encodeURIComponent(post.url)
    return (
        <Card className="mb" key={key}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {post.name}
                </Typography>
                <Typography color='textSecondary'>
                    Height: {post.height}, Mass: {post.mass}
                    <br/>
                    Birth Year: {post.birth_year}
                </Typography>
                <Button><Link to={link}>Learn More</Link></Button>
            </CardContent>
            
        </Card>
    )
}

PostList.propTypes = {
    post: PropTypes.object,
    key: PropTypes.number
}

export default PostList
