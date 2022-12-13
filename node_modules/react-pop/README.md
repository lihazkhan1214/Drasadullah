# react-pop
React popup component.

## Installation
```
npm install react-pop --save
```

## Getting started
```jsx
var React = require('react')
		, Pop = require('./react-pop.jsx')

React.render(
  <Pop labelOpen={"Toggle"} labelClose={"Toggle"}>
  	<div>
			Vestibulum interdum dapibus iaculis. Pellentesque a condimentum erat, non tempus erat. Sed pellentesque, arcu eget tristique facilisis, sapien ligula pharetra tellus, at malesuada nisl diam nec purus. Morbi aliquam ante erat, nec hendrerit enim malesuada vel. Sed in lorem quis enim aliquam consectetur eu nec leo. Nulla facilisi. Aenean malesuada risus sed tortor aliquam maximus.
		</div>
  </Pop>,
  document.getElementById("react-pop-anchor")
);
```

## Customize
The component can be customized by passing these objects.
* ```labelOpen``` String.
* ```labelClose``` String.
* ```xOut``` String.
* ```transitions``` Boolean.

## Styling
```css
div.react-pop-xout {
}
a.react-pop-xout {
}

/* Override default styling for popup content */
div.react-pop-content {
	
}
```