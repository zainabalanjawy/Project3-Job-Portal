import React, { Component } from 'react'

export default function Details(props) {
   /* const allPosts = props.id.map((post, index) => {
        return (
            <div key={index}>
                <button type="button" class="btn bg-gradient-primary btn-lg" > 
                <h4>{post.jobTitle}</h4>
                <p>{post.Location}</p>
                <p>{post.Salary}</p>
                </button>
                {/* <div className="App">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Salary</th>
                        </tr>
                        <tr>
                            <td>{post.jobTitle}</td>
                            <td>{post.Location}</td>
                            <td>{post.Salary}</td>
                      
                        </tr>
                    </table>
                </div> */
            // </div>
        // )
    // })

    return(
        <>
        {props.post}
        </>
    )
}
