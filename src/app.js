const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'EQ69H9Q94B',
  'a8e6e4876a79f83258c0dc20c2082a26'
);

const search = instantsearch({
  indexName: 'ted_talks',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article class="article">
          <div class="hit-class">
            <h2 class="speaker-name">${components.Highlight({ hit, attribute: 'name' })}</h2>
            <img src=${hit.image_url} alt=${hit.name}/>
            <h4>${components.Highlight({ hit, attribute: 'speakers' })}</h4>
            <p>${hit.description}</p>
            <p><b>Talk given at ${hit.event_name}</b></p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.addWidgets([
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#tag-list',
    attribute: 'tags',
  }),

  instantsearch.widgets.rangeSlider({
    container: '#courageous-rating',
    attribute: 'courageous_rating'
  }),

  instantsearch.widgets.rangeSlider({
    container: '#funny-rating',
    attribute: 'funny_rating'
  }),

  instantsearch.widgets.rangeSlider({
    container: '#informative-rating',
    attribute: 'informative_rating'
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 9
  }),
]);


search.start();
