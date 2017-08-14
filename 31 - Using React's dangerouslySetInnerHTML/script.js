var catalog = [
  {
    Id: 1,
    price: 5,
    description: 'this is a <b>cool</b> product'
  },
  {
    Id: 2,
    price: 5,
    description: '<span style="color:blue">this is a cool product</span>'
  },
  {
    Id: 3,
    price: 5,
    description: '<b>this</b> is a cool product'
  },
  {
    Id: 4,
    price: 5,
    description: '<b><i>this</i> is the coolest product!</b>'
  },
  {
    Id: 5,
    price: 5,
    description: '<span style="color:red">this is a cool product</span>'
  },
  {
    Id: 6,
    price: 5,
    description: 'this is a <i>cool</i> product'
  }
];

var d = React.DOM;
  var Catalog =
    React.createClass({
      render:function(){
        var items = this.props.products.map(function(item){
          return d.div({className:'product'},
            d.b(null, 'Product #' + item.Id),
            d.p(null, '$' + item.price),
            d.span({dangerouslySetInnerHTML:{__html: item.description}}));
        });

        return d.div(null, items);
      }
    });
  React.renderComponent(Catalog({products: catalog}), document.body);var d = React.DOM;
  var Catalog =
    React.createClass({
      render:function(){
        var items = this.props.products.map(function(item){
          return d.div({className:'product'},
            d.b(null, 'Product #' + item.Id),
            d.p(null, '$' + item.price),
            d.span({dangerouslySetInnerHTML:{__html: item.description}}));
        });

        return d.div(null, items);
      }
    });
  React.renderComponent(Catalog({products: catalog}), document.body);