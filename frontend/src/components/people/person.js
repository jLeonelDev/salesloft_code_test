function Person(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-6">{props.name}</p>
            <p className="subtitle is-7">{props.email}</p>
            <p className="subtitle is-7">{props.job_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
