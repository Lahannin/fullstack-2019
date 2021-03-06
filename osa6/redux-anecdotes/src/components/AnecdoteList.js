import React from "react";
import { connect } from "react-redux";

import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
    const vote = (id,anecdote) => {
        props.addVote(id);
        props.setNotification(`You voted for "${anecdote}"`,5);
    };

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        notification: state.notification
    };
};
const mapDispatchToProps = {
    addVote,
    setNotification
};
const ConnectedAnecdoteList = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList);
export default ConnectedAnecdoteList;