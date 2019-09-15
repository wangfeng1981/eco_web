class MeasurementProductDetail extends React.Component
{ 
    constructor(props){
        super(props) ;
        this.connector = props.connector ;
        
        let tempcheckstr = '' ;
        for(let obj of props.connector.layerlist ) {  
            if( obj.pid == props.info.pid )
            {
                tempcheckstr = 'checked' ;
                break ;
            }
        }
        
        this.state = {info:props.info , checkstr:tempcheckstr } ;
        
        this.checkedHandler = this.checkedHandler.bind(this) ;
    }
    
    static getDerivedStateFromProps(props, state)
    {
        let tempcheckstr = '' ;
        for(let obj of props.connector.layerlist ) {  
            if( obj.pid == props.info.pid )
            {
                tempcheckstr = 'checked' ;
                break ;
            }
        }
        
        return {info:props.info , checkstr:tempcheckstr } ;
    }
    
    checkedHandler(event)
    {
        if( this.state.checkstr=='checked' )
        {
            this.setState( {checkstr:''} ) ; 
            this.connector.layerlist = this.connector.layerlist.filter(item => item.pid !==  this.state.info.pid ) ;
            this.connector.layerPanelCallback() ;
        }else
        {
            this.setState( {checkstr:'checked'} ) ;
            this.connector.layerlist.push( this.state.info ) ;    
            this.connector.layerPanelCallback() ;
        
        }
    }
    
    render(){
        console.log(this.state.checkstr) ;
        return (
            <div className="tab-content col-md-9 col-sm-12">
                <div className="tab-pane active">
                    <div>
                        <div className={"wv-checkbox "+this.state.checkstr} >
                            <input type="checkbox" className="settings-check" onChange={this.checkedHandler}   /> 
                            
                            <label>{this.state.info.name}</label>
                        </div>
                    </div>
                    <div>
                        <div className="source-metadata overflow">
                            <h3>{this.state.info.longname}</h3>
                            <p>{this.state.info.description}</p>
                            <p><a href='{this.state.info.reference}'>产品详细说明</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

