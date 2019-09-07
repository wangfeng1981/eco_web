class MeasurementProductDetail extends React.Component
{ 
    constructor(props){
        super(props) ;
        this.state = {info:props.info} ;
    }
    
    static getDerivedStateFromProps(props, state)
    {
        return {info:props.info} ;
    }
    
    render(){
        return (
            <div className="tab-content col-md-9 col-sm-12">
                <div className="tab-pane active">
                    <div>
                        <div className="wv-checkbox ">
                            <input type="checkbox" className="settings-check" />
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

