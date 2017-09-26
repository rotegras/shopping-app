
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
