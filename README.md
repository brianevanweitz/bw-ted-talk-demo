# Algolia Ted Talk Search Demo - Brian Weitz

### The Project:
For this project, I began by uploading and indexing a dataset of Ted Talks (provided by Algolia) to my Algolia Dashboard. For relevancy setttings, I configured both searchable attributes and attributes for faceting. I then created a front-end UI using a boostrapped instantsearch.js project.

### Goals and methodology:
I wanted to make sure the Ted Talks dataset was presented to end users in a way that was natural for them to both search for it and filter within it. Because of this, I chose the talk name, the speakers, and the event the talk was given at as my searchable attributes. I also chose not to use any custom ranking attributes or sort-by attributes, as I believed the search attributes alone would best bring the talks the users wanted to the top of the list and for this exercise there was no business purpose I could find for modifying those results within this particular dataset.

For faceting, I wanted to demo the refinement list tool and felt the Tags attribute in this dataset was the most relevant attribute for end users to refine their search results on. Additionally, I added 3 range slider filter widgets as I wished to demo some additional tools Algolia has to offer beyond basic search and refinement. The Ted Talks dataset has seven different 'ratings' (courageous rating, beautiful rating, etc.) on which a talk can receive scores, but I limited my 
filters to 3: Courageous, Funny, and Informative. I felt these 3 were the most likely to be relevant to Ted Talk viewers, and 7 sliders on the screen would be more than most users would want to configure for this kind of search. 

For the UI, I implemented Flexbox to render the search contents in a 3x3 grid for each page of results. I added mobile responsiveness as well: on mobile devices, I collapsed all the filters into an expandible menu and reduced the number of search results per row to 1.

### Next steps:
Were I to build this project out farther, I'd love to integrate it with an API that pulls in additional functionality or data. I attempted to build out a separate project leveraging [this public TED API](https://rapidapi.com/bestApi/api/ted) to use the Talk name to get a youtube link for each talk to add as a button within the search results, but it appears to be out of service as I received a "The API is unreachable, please contact the API provider" error message on all my API requests.

### Observations:
The instantsearch.js bootstrap is a great way to create a basic search interface very quickly. However, it is challenging to customize if you're unfamiliar with parcel.js. When looking to integrate external API calls via Axios, I found it much easier to create a basic react app and import axios along with Algolia's React instantsearch libraries.
