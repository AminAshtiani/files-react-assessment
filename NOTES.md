## What I noticed
- **Weak typing**: default infering type, any or unknown 
- **Api calls**: repeated api call, wrong url for favorite page, repetitive pattern and duplicate code and logic 
- **Unused dependency**: Mantine hooks, dates and modal + dayjs is installed but never use, while there is Date instances in app.
- **Navigation bypasse react-router**: Navigation and link didn't handle with react-router.
- **File sturcture**: it seems that application follow feature-based sturcture, but need to be better.

## What I changed and why

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