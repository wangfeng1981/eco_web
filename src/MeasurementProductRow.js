class MeasurementProductRow extends React.Component
{
    constructor(props){
        super(props) ;
        this.info = props.info ;
        this.state = {currentproductindex:props.currentproductindex} ;
        this.index = props.index ;
        this.clickHandler = this.clickHandler.bind(this) ;
        this.updateParentHandler = props.updateParent ;
    }
    
    clickHandler(){
        this.updateParentHandler(this.index) ;
    }
    
    static getDerivedStateFromProps(props, state)
    {
        if( props.currentproductindex != state.currentproductindex )
            {
                return {currentproductindex:props.currentproductindex} ;
            }else
                {
                    return null ;
                }

    }
    
    render(){
        if( this.state.currentproductindex == this.index )
            {
                return (
                    <li
                    className="active source-nav-item nav-item" onClick={this.clickHandler}>
                    <a className="nav-link">{this.info.name}</a></li>
                )
            }else
                {
                    return (
                        <li
                        className="source-nav-item nav-item" onClick={this.clickHandler}>
                        <a className="nav-link">{this.info.name}</a></li>
                    )
                }
        
    }
}