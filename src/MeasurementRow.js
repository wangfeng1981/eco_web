

class MeasurementRow extends React.Component
{
    constructor(props){
        super(props) ;
        this.info = props.info ;
        console.log( 'MeasurementRow') ;
        console.log(this.info) ;
        this.parentDivId = props.parentDivId ;
        this.state = {currentProductIndex:0} ;
        this.updateParentHandler = this.updateParentHandler.bind(this) ;
        this.connector = props.connector ;
    }
    
    updateParentHandler(clickIndex){
        this.setState(
            {
                currentProductIndex:clickIndex
            }
        )
    }
    
    render(){
        return (
            <div className="measurement-row layers-all-layer">
                <div className="measurement-row-header" >
                    <h3>{this.info.title}</h3>
                    <h5>{this.info.subtitle}</h5>
                    <i className="fa fa-chevron-circle-right arrow-icon"
                        data-toggle="collapse" data-target={"#measurement_row_"+this.info.id}>
                    </i>
                </div>
                <div className="container collapse" id={"measurement_row_"+this.info.id} data-parent={'#'+this.parentDivId}>
                    <div className="row">
                        <ul className="source-tabs col-md-3 col-sm-12 nav flex-column">
                            {
                            this.info.productArray.map(
                                                (obj,index)=>
                                                    <MeasurementProductRow 
                                                        key={index} 
                                                        currentproductindex={this.state.currentProductIndex} 
                                                        index={index}
                                                        info={obj} 
                                                        updateParent={this.updateParentHandler}
                                                        />
                                                )
                            }
                        </ul>
                        <MeasurementProductDetail info={this.info.productArray[this.state.currentProductIndex]} 
                        connector={this.connector} 
                        />
                    </div>
                </div>
            </div>
        ) ;
    }
}

                                        


                                                     
                                                    