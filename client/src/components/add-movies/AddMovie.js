import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMovie } from "../../actions/profileActions";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      director: "",
      rating: "",
      yearofrelease: "",
      genre: "",
      plotsummary: "",
      stars: "",
      review: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const movData = {
      title: this.state.title,
      director: this.state.director,
      rating: this.state.rating,
      yearofrelease: this.state.yearofrelease,
      genre: this.state.genre,
      plotsummary: this.state.plotsummary,
      stars: this.state.stars,
      review: this.state.review
    };
    this.props.addMovie(movData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-movie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Movie</h1>
              <p className="lead text-center">Add a Movie</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="* Director"
                  name="director"
                  value={this.state.director}
                  onChange={this.onChange}
                  error={errors.director}
                />
                <TextFieldGroup
                  placeholder="* Rating"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.onChange}
                  error={errors.rating}
                />
                <h6>* Year of Release</h6>
                <TextFieldGroup
                  name="yearofrelease"
                  type="date"
                  value={this.state.yearofrelease}
                  onChange={this.onChange}
                  error={errors.yearofrelease}
                />
                <TextFieldGroup
                  placeholder="Genre"
                  name="genre"
                  value={this.state.genre}
                  onChange={this.onChange}
                  error={errors.genre}
                />
                <TextAreaFieldGroup
                  placeholder="Plot Summary"
                  name="plotsummary"
                  value={this.state.plotsummary}
                  onChange={this.onChange}
                  error={errors.plotsummary}
                  info="A basic summary of the plot. Try to avoid spoilers"
                />
                <TextAreaFieldGroup
                  placeholder="Review"
                  name="review"
                  value={this.state.review}
                  onChange={this.onChange}
                  error={errors.review}
                  info="Your take on the film"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMovie }
)(withRouter(AddMovie));
