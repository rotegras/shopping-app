
  sort_by = (field, reverse, primer) => {

    var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
  }

    const condDirection = (value == prevState.sortBy) ? !prevState.direction : prevState.direction; 

      <span {`{name}=='id' ? className={styles.arrowdown} : className={styles.arrowdow2}`}>


App.propTypes = {
  children: PropTypes.node.isRequired,
}



car component 

  props  definition.... data passed to a route, not to a component.
    const cars = this.props.route.data;

    const carNode = cars.map((car) => {
      return (
        <Link
          to={"/cars/"+car.id}>
          {car.name}
        </Link>
      ) 
    });
    return (
      <div>
        <h1>Cars Pate</h1>
          <div className="list-group">
            {carNode} 
          </div>
      </div>
    );

class CarDetail extends Component {
    render(){
        // Car array
        const cars = this.props.route.data;
        // Car Id from param
        const id = this.props.params.id;
        // Filter car with ID
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car[0].model}</li>
                           <li><strong>Make</strong>: {car[0].make}</li>
                           <li><strong>Year</strong>: {car[0].year}</li>
                           <li><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail



original render de productlist


  render () {
    return (
      <div className={ styles.container }> 
     <span className={ styles.sorttitle }> Sort by: </span>
        <ul className={ styles.sortclasses }>

          {buttons.map((button, index) =>( 
            <Controls 
              key={index}
              name={button.name}
              orderDirection={this.state.orderDirection}
              checked={button.name == this.state.sortBy ? true : false}
              action={this.reorder}
            />
        ))}
        </ul>

        <div className={ styles.list }>
          {this.orderItems(this.state.orderBy).map((item, index) =>( 
            <Item
              key={item.id}          
              {...item}
              see={this.seeItem}
            />
          ))}
        </div>

      </div>
    )
  }



            <Link to={"/product/"+{item.id}}>See</Link>

