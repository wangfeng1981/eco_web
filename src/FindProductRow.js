class FindProductRow extends React.Component
{
    constructor(props){
        super(props) ;
        this.info = props.info ;
        this.productPath = props.productPath ;
        this.rowid = props.rowid;
        this.parentDivId = props.parentDivId;
    }
    
    render(){
        return (

                    <div className="layers-all-layer">
                        <div className="layers-all-header has-checkbox">
                            <h3>{this.info.name}<i className="fa fa-info-circle" data-toggle="collapse" href={'#findproductrow_'+this.rowid}></i></h3>
                            <h5>{this.productPath}</h5>
                        </div>
                        <div className="source-metadata collapse"  id={'findproductrow_'+this.rowid}
                            data-parent={'#'+this.parentDivId}
                            >
                            <p className="layer-date-range">时间区间:
                            </p>
                            <div>
                                <p>{this.info.description}</p>
                                <p><a href='{this.info.reference}'>产品详细说明</a></p>
                            </div>
                            <div className="metadata-more"><span className="ellipsis up" 
                                data-toggle="collapse" href={'#findproductrow_'+this.rowid}>^</span></div>
                        </div>
                    </div>
                    
        )
    }
}