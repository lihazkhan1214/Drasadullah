var React = require('react/addons')
    , ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

React.initializeTouchEvents(true)

var Toggle = React.createClass({displayName: "Toggle",
    render: function() {
      return (
        React.createElement("a", {className: "react-pop-toggle", href: "#", onClick: this.props.on_click}, 
          this.props.label
        )
      )
    }
  })

var Pop = React.createClass({displayName: "Pop",
    propTypes: {
      opened: React.PropTypes.bool
      , labelOpen: React.PropTypes.string
      , labelClose: React.PropTypes.string
      , xOut: React.PropTypes.string
      , transitions: React.PropTypes.bool
    }
    , getDefaultProps: function() {
      return {
        opened: false
        , labelOpen: "Toggle"
        , labelClose: "Toggle"
        , xOut: "Close"
        , transitions: false
      }
    }
    , getInitialState: function() {
      return {
        mounted: false
        , opened: false
      }
    }
    , componentDidMount: function() {
      this.setState({
        mounted: true
      })
    }
    , toggle: function() {
      this.setState({opened: !this.state.opened})
    }
    , render: function() {
        var contentStyle = {
            position: "Absolute"
            , margin: "0 auto auto"
            , padding: "10px"
            , right: 0
            , left: 0
            , width: "50%"
            , background: "#F8F8FF"
            , borderRadius: "6px"
            , boxShadow: "1px 1px 2px #bfbfbf"
          }
          , xOutDivStyle = {
            width: "auto"
            , textAlign: "right"
          }
          , xOutStyle = {
            fontFamily: "Helvetica"
            , textDecoration: "none"
          }
        if (this.state.opened) {
          var content =
              React.createElement("div", null, 
                React.createElement("div", {style: contentStyle, className: "react-pop-content"}, 
                  React.createElement("div", {className: "react-pop-xout", style: xOutDivStyle}, 
                    React.createElement("a", {className: "react-pop-xout", style: xOutStyle, onClick: this.toggle, href: "#"}, 
                      this.props.xOut
                    )
                  ), 
                  this.props.children
                )
              )
            , label = this.props.labelClose
      } else {
        var content = null
            , label = this.props.labelOpen
      }
      return (
        React.createElement("div", {className: "react-pop-wrapper"}, 
          React.createElement(Toggle, {label: label, on_click: this.toggle}), 
          this.props.transitions ?
            React.createElement(ReactCSSTransitionGroup, {transitionName: "react-pop-content"}, 
              content
            )
          : content
        )
      )
    }
  })

module.exports = Pop