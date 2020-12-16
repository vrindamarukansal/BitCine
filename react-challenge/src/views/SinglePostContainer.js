import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {getPost} from '../redux/actions'
import {connect} from 'react-redux'
import SinglePost from '../components/SinglePost'
import { Container, CssBaseline, Button} from '@material-ui/core';

const SinglePostContainer = props => {
    const {getPost} = props
    const {post,loading} = props.data
    const url= decodeURIComponent(props.match.params.slug)
    useEffect(() => {
        console.log(url)
        getPost(url)
    }, [getPost, url])
    if (loading){
        return (<div>Loading...</div>)
    }
    else{
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='md'>
                <Button size='small'
                        onClick={()=>{props.history.goBack();}}>
                    Go Back
                </Button>
                    <SinglePost post={post}/>
                </Container>
            </React.Fragment>
        )
    }
}

SinglePostContainer.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.array,
    loading: PropTypes.bool

}

const mapStateToProps = (state)=>({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    getPost: (url)=> dispatch(getPost(url))
})

export default connect(mapStateToProps,mapDispatchToProps)(SinglePostContainer)
