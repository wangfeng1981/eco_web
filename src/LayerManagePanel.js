class LayerManagePanel extends React.Component
{
    constructor(props){
        super(props) ;
        //this.state = {info:props.info} ;
        
        this.state  ={connector: props.theconnector };
        
        //bind
        this.layerListChangedCallback = this.layerListChangedCallback.bind(this) ; 
        this.state.connector.layerPanelCallback = this.layerListChangedCallback ;
        
        this.onChildItemLayerRemoveClicked = this.onChildItemLayerRemoveClicked.bind(this) ;
    }
    
    layerListChangedCallback()
    {
        console.log("layer changed.") ;
        this.setState( {connector: this.state.connector} ) ;
    }
    
    onChildItemLayerRemoveClicked( iteminfo )
    {
        this.state.connector.layerlist = 
            this.state.connector.layerlist.filter(item => item.pid !==  iteminfo.pid ) ;
        this.layerListChangedCallback() ;
        
    }

    
    render(){
        return (
        <div className="scrollbar-hidden" data-simplebar="init" style={{maxHeight: '698px'}}>
          <div className="simplebar-track vertical" style={{visibility: 'hidden'}}>
            <div className="simplebar-scrollbar" />
          </div>
          <div className="simplebar-track horizontal" style={{visibility: 'hidden'}}>
            <div className="simplebar-scrollbar" />
          </div>
          <div className="simplebar-scroll-content" style={{paddingRight: '17px', marginBottom: '-34px'}}>
            <div className="simplebar-content" style={{paddingBottom: '17px', marginRight: '-17px'}}>
              <div className="layer-container sidebar-panel" style={{display: 'block'}}>
                {/* 辅助及专题产品图层 */}
                <div className="layer-group-case">
                  <h3 className="head">辅助及专题产品图层</h3>
                  <ul id="sortableoverlays" className="category">
                        {
                            this.state.connector.layerlist.map( (obj,index) =>
                                (
                                    <LayerPanelItem info={obj} key={index} onremove={this.onChildItemLayerRemoveClicked} />
                                )
                            )
                        }
                  </ul>
                </div>
                {/* 图层列表 */}
                <div className="layer-group-case">
                  <h3 className="head">底图图层</h3>
                  <ul id="sortablebaselayers" className="category">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}




                        