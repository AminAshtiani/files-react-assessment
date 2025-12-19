## What I noticed
- **Weak typing**: default infering type, any or unknown 
- **Api calls**: repeated api call, wrong url for favorite page, repetitive pattern and duplicate code and logic 
- **Unused dependency**: Mantine hooks, dates and modal + dayjs is installed but never use, while there is Date instances in app.
- **Navigation bypasse react-router**: Navigation and link didn't handle with react-router.
- **File sturcture**: it seems that application follow feature-based sturcture, but need to be better.

## What I changed and why
- based on `items.json` and `favorites.json` create item type and other related type and use them in code.
- file structure is a little complicated and cofusing, I change components folder structure, add some new directory like `utils` which is more accissible and readable
- fetching data in both home and favorite page has the same pattern, also has a critical bug which calls the api repeatedly. I make a hook for api calls, add loading, error and ref guard to it. the hook is also handle types.
- there were some dependencies in package.json which were unused, I check what will be needed and remove the other(`hooks` and `dates`). make utility method for date handling and also add modal provider to show modal instead of browser alert.
- I make some change in sidebar to use react-router features. before that on every navigation page was reloaded becaues sidebar bypassed the react router and do the navidation without it.


## Trade-offs or assumptions
- **Did not introduce global state or data-fetching libraries**
  - I kept fetching logic local to each page rather than adding tools like React Query or a global store.
  - Assumption: The “minimal external dependencies” constraint and small app surface area make simple `fetch` + local state sufficient here. plus that in this case i assume that we don't need api cache.

- **Keep app layout structure**
  - I read Mantine docs and see `AppShell` but I decided to keep current structure and also don't use responsive layout.
  - Currenct strucute is simple and crystal clear but not optimize and responsive. next Action for layout will really close to a rewrite.
- **Listing Optimization**:
  - I kept Listing view(Grid and table) rather than adding tools like virtuoso.
  - The “minimal external dependencies” constraint makes me confident to keep application as small as I can until I have to. in this case we don't need to add a new dependency which force us to refactor all listing component.

## What I would improve next with more time
- if check useApi it has a very simple implementation which add loading status, errors. but if I want to improve the app I would definitly refactor this part with react-query, RQ will gives use all we've already implemented with more utility like cache, type safty and more.
- implementation of list should be refactor completely. Grid and Table should refactor with tools that do virtualization(like virtuoso). plus that add pagination and filter to load and filtered data if it will be possible.
- implement a local state(using context) + react-query to add more functionality like real CRUD. add new folder using dropzone and also update the items.
- will move layout from current implementation to mantine's `AppShell`
- will add some configuration for formatting and linting
- will add storybook if we have more atomic components
