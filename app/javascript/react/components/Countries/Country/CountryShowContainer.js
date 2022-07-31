import React, { useState, useEffect, Fragment } from "react";
import PostForm from "../../Posts/PostForm.js";
import PostsIndexContainer from "../../Posts/PostsIndexContainer.js";
import CountryHeader from "./CountryHeader";

const CountryShowContainer = (props) => {
  let slug = props.match.params.slug;

  const [country, setCountry] = useState({});
  const [posts, setPosts] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const fetchCountry = async () => {
    try {
      const response = await fetch(`/api/v1/countries/${slug}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const countryData = await response.json();
      console.log("countryData:", countryData);
      setCountry(countryData.data);
      setPosts(countryData.included);
      setLoaded(true);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const addPost = async (formInput) => {
    // debugger;

    try {
      const response = await fetch(`/api/v1/posts`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(formInput),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const newPost = await response.json();
      setPosts(posts.concat(newPost));
    } catch (err) {
      console.error(`Error in fetch ${err.message}`);
    }
  };

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    const country_id = parseInt(country.id);
    event.preventDefault();
    inputs["country_id"] = country_id;
    addPost(inputs);
    setInputs({
      title: "",
      body: "",
    });
  };

  return (
    <div>
      {loaded && (
        <Fragment>
          <div>
            <CountryHeader
              attributes={country.attributes}
              posts={country.relationships.posts.data}
            />
          </div>
          <div>
            <PostForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={country.attributes}
              inputs={inputs}
            />
          </div>
          <div>
            <ul>
              <PostsIndexContainer posts={posts} />
            </ul>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CountryShowContainer;
