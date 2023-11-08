# Hygraph Top-Level Remote Source Data Picker App

This is a proof of concept for a Hygraph App to allow users to choose data from a remote source. It requires that [top level remote sources](https://hygraph.com/docs/getting-started/top-level-remote-fields) be used.

## Making your own

We have a hosted version of this app available, but it might be best to host it yourself for any minor changes you wish to make. To do so, follow these steps:

1. Clone the project and install the dependencies

```
npx degit git@github.com:brob/hygraph-app-datapicker-poc.git data-picker
cd data-picker
npm install
npm run dev
```

2. **Register your app on Hygraph**
> In order to use your own version, you need a Hygraph account and a project to install the app to.

Follow [these instructions](https://hygraph.com/docs/app-framework/first-steps/register-your-app) to register an app on Hygraph.

If you're working locally, your app's URL will be `http://localhost:3000`. If you're hosting your app on a server, you'll need to use the URL of your server. The "Setup" route will be `http://localhost:3000/setup` or `http://your-server.com/setup`.



3. **Create the two Elements required by the app**

There are two elements that you can use in this App. Both are Field elements. Here's the data needed for both:

**GraphQL Data Picker Element**
* Name: GraphQL Data Picker
* API ID: `graphqlDataPicker`
* Type: Field
* Features: FieldRenderer
* Field Type: String
* URL: `http://localhost:3000/dataPicker`
* Description: A data picker for GraphQL data sources (or what makes sense for you)
* Config: 
```
{
  "ID_FIELD": {
    "type": "string",
    "description": "The key to the ID field",
    "displayName": "ID Field ID"
  },
  "QUERY_ID": {
    "type": "string",
    "description": "Remote Source Field API ID",
    "displayName": "API ID"
  },
  "TITLE_FIELD": {
    "type": "string",
    "description": "The key to the title field",
    "displayName": "Title Field ID"
  }
}
```

**REST Data Picker Element**
* Name: REST Data Picker
* API ID: `restDataPicker`
* Type: Field
* Features: FieldRenderer
* Field Type: String
* URL: `http://localhost:3000/restData`
* Description: A data picker for REST data sources (or what makes sense for you)
* Config: 
```
{
  "ID_FIELD": {
    "type": "string",
    "description": "The key to the ID field",
    "displayName": "ID Field ID"
  },
  "QUERY_ID": {
    "type": "string",
    "description": "Remote Source Field API ID",
    "displayName": "API ID"
  },
  "TITLE_FIELD": {
    "type": "string",
    "description": "The key to the title field",
    "displayName": "Title Field ID"
  },
  "DATA_KEY": {
    "type": "string",
    "description": "The key to the data array that comes back from the API",
    "displayName": "Data Array Key"
  }
}
```

4. **Install the App in your project**

In your project, navigate the the Apps screen. Click "Go to your apps," Click the install icon on your app.

5. **Add the fields in your schema**

Add the fields in the configurations that make sense for your APIs in whatever schema you want your editors to have access to a picker.
