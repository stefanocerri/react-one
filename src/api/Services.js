export const getPosts = async () => {
  var response = await fetch("http://react-one.com:8888/wp-json/wp/v2/posts");
  let data = await response.json();
  return data;
};

export const getPostById = async id => {
  var response = await fetch("http://react-one.com:8888/wp-json/wp/v2/posts");
  let data = await response.json();
  let dataById = data.filter(e => e.id === id)[0];
  return dataById;
};

export const getFeaturedById = async id => {
  var response = await fetch("http://react-one.com:8888/wp-json/wp/v2/media");
  let data = await response.json();
  let dataById = data.filter(e => e.id === id)[0];
  return dataById;
};

export const getCategories = async id => {
  var response = await fetch(
    "http://react-one.com:8888/wp-json/wp/v2/categories"
  );
  let data = await response.json();
  return data;
};

/*export const getNavigationPrimary = async () => {
  var response = await fetch(
    "http://react-one.com:8888/wp-json/menus/v1/menus"
  );
  let data = await response.json();
  console.log(data);
  let term_id = data.map(e => e.term_id)[0];

  return term_id;
};

export const getNavigationPrimaryById = async id => {
  //console.log(`ciao${id}`);
  var response = await fetch(
    `http://react-one.com:8888/wp-json/menus/v1/menus/${id}`
    );
    let data = await response.json();
    return data.items;
  };

export const getNavigationPrimary = async () => {
  var response = await fetch(
    "http://react-one.com:8888/wp-json/menus/v1/menus"
  );
  let data = await response.json();
  let term_id = data.map(e => e.term_id)[0];

  var response2 = await fetch(
    `http://react-one.com:8888/wp-json/menus/v1/menus/${term_id}`
  );
  let data2 = await response2.json();

  console.log(data2);

  return data2.items;
};*/

export const getNavigationPrimary = async () => {
  var url = "http://react-one.com:8888/wp-json/menus/v1/menus";

  var result = await fetch(url, { method: "get" })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var term_id = data[0].term_id;
      return fetch(url + "/" + term_id);
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.items;
    })
    .catch(function(error) {
      console.log("Request getNavigationPrimary failed", error);
    });

  return result;
};
