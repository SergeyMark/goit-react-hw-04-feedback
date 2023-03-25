export const FeedbackOptions = ({names, onClickFeedback}) => {
    return(
        <div>
            { names.map( name => (
                <button key={name} onClick={() => onClickFeedback(name)}>
                    {name}
                </button>
            ))}
        </div>
    )
}