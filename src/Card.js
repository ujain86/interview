import React from 'react'

function Card(props) {

    // {
    //     profilePic: string,
    //     profileUrl: string,
    //     username: string,
    //     fullname: string,
    //     likes: string,
    //     postId: string
    //    }
    
    const handleClick = () => {
        const obj = {
            profilePic: props.data.profile_image.large,
            profileUrl: props.data.links.html,
            username: props.data.username,
            fullname: props.data.name,
            likes: props.data.total_likes,
            postId: props.data.id
        }
        console.log(obj);

        // window.redirect()
        // console.log('profilePic', props.data.profile_image.large);
        // console.log('profileUrl', props.data.links.html);
        // console.log('username', props.data.username);
        // console.log('fullname', props.data.name);
        // console.log('likes', props.data.total_likes);
        // console.log('postId', props.data.id);
    }

  return (
    <div className='card' onClick={handleClick}>
        <div>
            <img src={props.data.profile_image.large}></img>
        </div>
        <div id='data-div'>
           <p> Name: {props.data.name}</p>
           <p> Username: {props.data.username}</p>
           <p> Likes: {props.data.total_likes}</p>
           <p> ID: {props.data.id}</p>
        </div>
    </div>
  )
}

export default Card