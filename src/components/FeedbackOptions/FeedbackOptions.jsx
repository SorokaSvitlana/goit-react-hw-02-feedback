export const FeedbackOptions = ( {options, onLeaveFeedback}) => {
   return ( <ul>
    {options.map(name => (
      <li key={name}>
        <button key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    ))}
  </ul>)
}