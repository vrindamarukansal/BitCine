import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {getPosts} from '../redux/actions'
import {connect} from 'react-redux'
import Pagination from '../components/Pagination'
import PostList from '../components/PostList'
import { Container, Button} from '@material-ui/core';


const PostListContainer = props => {
    const {getPosts} = props
    const {posts,loading} = props.data
    const [currentPage,setCurrentPage]= useState('http://swapi.dev/api/people/?page=1')
    useEffect(() => {
        console.log(currentPage)
        getPosts(currentPage)
    }, [getPosts,currentPage])
    if(loading){
        return(<Container maxWidth='md'>
            Loading...
        </Container>)
    }
    else{
        return (
            <Container maxWidth='md'>
                <div className='d-flex mt mb'>
                    {(posts.previous)&&(
                        <Button color='primary' className='mr'
                            onClick={()=> setCurrentPage(posts.previous)}>
                            Prev
                        </Button>
                    )}
                    {(posts.next)&&(
                        <Button color='primary'
                            onClick={()=> setCurrentPage(posts.next)}>
                            Next
                        </Button>
                    )}
                </div>
                {posts.results.map((post,idx)=>(
                    <PostList key={idx} post={post}/>
                ))}
            </Container>
        ) 
    }
}

PostListContainer.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    loading: PropTypes.bool

}

const mapStateToProps = (state)=>({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    getPosts: (page)=> dispatch(getPosts(page))
})

export default connect(mapStateToProps,mapDispatchToProps)(PostListContainer)
