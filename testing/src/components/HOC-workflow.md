## Just a note on HOC creation workflow

1. Write all of the logic that will be reused (lifecycle methods, any other generic methods that
  can apply to different components)
2. Create the scaffold (e.g. requireAuth.js) - the name starts with small case because the file
  exports a function, not a component
3. Transfer the logic to the HOC
4. Use `{...this.props}` to pass the props that the HOC receives down to the component it wraps

Step no. 4 is extremely important - don't forget to do it, or nothing will work.
