class LayerPanelItem extends React.Component
{
    constructor(props){
        super(props) ;
        
        this.state = {info:props.info} ;
        
        this.onRemoveClick = this.onRemoveClick.bind(this) ;
        
        this.onremove = props.onremove ;
    }
    
    static getDerivedStateFromProps(props, state)
    {
        return {info:props.info} ;
    }
    
    onRemoveClick(){
        this.onremove( this.state.info ) ;

    }
    
    render(){
        return (
            <li className="item productsitem" >
                <a className="hdanchor hide hideReg bank-item-img layer-hidden" title="显示/隐藏图层">
                    <i className="far fa-eye-slash layer-eye-icon" />
                </a>
                <div className="zot"  ><b>!</b>
                </div>
                <div className="layer-main">
                    <a  title="移除图层" className="button wv-layers-close" onClick={this.onRemoveClick}>
                        <i className="fa fa-times" />
                    </a>
                    <a title="图层选项" className="wv-layers-options">
                        <i className="fas fa-sliders-h wv-layers-options-icon" />
                    </a>
                    <a title="产品描述信息" className="wv-layers-info" >
                        <i className="fa fa-info wv-layers-info-icon" />
                    </a>
                  <h4>{this.state.info.name}</h4>
                  <p>{this.state.info.longname}</p>
                </div>
              </li>
        )
    }
}