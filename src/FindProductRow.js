class FindProductRow extends React.Component
{
    constructor(props){
        super(props) ;
        this.info = props.info ;
        this.productPath = props.productPath ;
        this.rowid = props.rowid;
        this.parentDivId = props.parentDivId;
        
        //function methods
        this.clickHandler = this.clickHandler.bind(this) ;
        
        this.connector = props.connector ;
        let tempcheckstr = '' ;
        for(let obj of props.connector.layerlist ) {  
            if( obj.pid == props.info.pid )
            {
                tempcheckstr = 'checked' ;
                break ;
            }
        }
        this.state = {checkstr:tempcheckstr } ;
        
    }
    
    clickHandler(e)
    {
        if( e.target.tagName.toLowerCase() == 'div' )
        {
            if( this.state.checkstr=='' )
            {
                this.setState( {checkstr:'checked'} ) ;
                this.connector.layerlist.push( this.info ) ;    
                this.connector.layerPanelCallback() ;
            }
            else
            {
                this.setState( {checkstr:''} ) ;
                this.connector.layerlist = this.connector.layerlist.filter(item => item.pid !==  this.info.pid ) ;
                this.connector.layerPanelCallback() ; 
            }
        }
        
    }
    
    render(){
        return (

                    <div className="layers-all-layer">
                        <div className={"layers-all-header has-checkbox " + this.state.checkstr} onClick={this.clickHandler} >
                            <h3>{this.info.name}<i className="fa fa-info-circle" data-toggle="collapse" href={'#findproductrow_'+this.rowid} ></i>
                            </h3>
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