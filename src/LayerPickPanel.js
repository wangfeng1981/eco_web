class LayerPickPanel extends React.Component
{
    constructor(props){
        super(props) ;
        this.state = {info:props.info , searchtext: ""} ;
        this.onSearchInputTextChanged = this.onSearchInputTextChanged.bind(this) ;

        
    }
    
    onSearchInputTextChanged(event)
    {
        console.log('text change');
        this.setState({searchtext: event.target.value});
    }
    
    
    render(){
        let rows = [] ;
        if( this.state.searchtext == "" )
        {
            for( let index in this.state.info.productGroupArray )
            {
                rows.push(
                    <MeasurementRow 
                    key={index} 
                    info={this.state.info.productGroupArray[index]} 
                    parentDivId='productGroupsParent' />
                )
            }
        }else
        {
            let tempindex = 0 ;
            let searchtext = this.state.searchtext.trim() ;
            let searchWordArray = searchtext.split(" ",10) ;
            for( let igroup in this.state.info.productGroupArray )
            {
                let groupObj = this.state.info.productGroupArray[igroup] ;
                for( let ipdt in groupObj.productArray )
                {
                    let pdtOne = groupObj.productArray[ipdt] ;
                    let hasKeyword = true ;
                    searchWordArray.forEach( 
                        function(wordOne){
                            if( hasKeyword==true && pdtOne.name.indexOf(wordOne)  == -1 )
                            {//contains keyword
                                hasKeyword = false ;
                            }
                        }
                    ) ;
                    if( hasKeyword==true )
                    {
                        rows.push(
                                <FindProductRow 
                                key={tempindex} 
                                info={pdtOne} 
                                productPath={groupObj.title+'/'+pdtOne.name}
                                parentDivId='productGroupsParent'
                                rowid={tempindex}
                            />
                            )
                        tempindex ++ ;
                    }
                }
            }
            
        }

        return (
            <div className="modal fade" id="modalAddLayer" tabIndex="-1" 
                role="dialog" 
                aria-labelledby="modalAddLayerTitle" aria-hidden="true">    
            <div id="layer_picker_component" className="modal-dialog custom-layer-dialog light" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <div id="layer-search" className="layer-search input-group">
                                <input id="layers-search-input" placeholder="搜索" type="search" className="form-control"  onChange={this.onSearchInputTextChanged} />
                            </div>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div id="layer-modal-content" className="layer-modal-content">
                            <div className="scrollbar-visible" data-simplebar="init" style={{maxHeight:'504px'}} >
                                <div className="simplebar-track vertical" style={{visibility: 'visible'}}>
                                    <div className="simplebar-scrollbar" style={{height: '172px'},{transform: 'translate3d(0px, 0px, 0px)'}}></div>
                                </div>
                                <div className="simplebar-track horizontal" style={{visibility: 'hidden'}}>
                                    <div className="simplebar-scrollbar"></div>
                                </div>
                                <div className="simplebar-scroll-content" style={{paddingRight: '17px'},{marginBottom: '-34px'}}>
                                    <div className="simplebar-content" style={{paddingBottom: '17px'},{marginRight: '-17px'}}>
                                        <div className="product-outter-list-case">
                                            <div className="layer-picker-list-case layers-all" id="productGroupsParent">
                                                <div id="legacy-all-list">
                                                    {rows}
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
        
        
        
    }
}