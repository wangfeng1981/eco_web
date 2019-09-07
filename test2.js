
https://stackoverflow.com/questions/50769138/keep-a-list-item-highlighted-react-js

You aren't using React correctly and I would HIGHLY recommend you spend some time reading the docs on how a component should be used. That being said, in this instance you should use state to store the words that get loaded and also for an active selection. Also DONT I repeat DONT open a file in the render method!... render cycles can happen a lot and that would mean you open the file every time render happens, which is a bad idea.

// these are more helper functions.. either define them on your class or just define them in a helpers/utility file. or just put as a global above the class 
function splitLines(text) {
    return text.split('\n');
}

function splitWords(line) {
    return line.split('" "').slice(1);
}

export default class SegmentsList extends Component {
    constructor(props) {
        super(props);
        this.state = { words: [], activeWord: -1 }
    }
    onClickFunction = (idx) => {
        // set the state to only have a current word selection which will unselect the previous selection
        this.setState({activeWord: idx})
    }

    readTextFile = (url) => {
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", url, false);
        rawFile.overrideMimeType('text/xml; charset=iso-8859-1');
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                const text = rawFile.responseText;
                const lines = splitLines(text);
                const words = splitWords(lines[0]);
                this.setState({words});
            }
            return;
        };
        rawFile.send();
    }
    componentDidMount() {
        this.readTextFile(cabeza[parte].etiquetas);
    }
    render() {
        return (
            <div>
                <ol>
                    {this.state.words.map((word, index) =>
                        <li
                          onClick={this.onClickFunction.bind(null, index)}
                          className={`segmentsList${this.state.activeWord === index ? ' selected' : ''}`}
                          key={index}
                        >
                          {word}
                        </li>
                    )}
                </ol>

                <Button
                    color='primary'
                    className='mt-3 ml-3'
                >
                    <Link to='/'/>
                    Volver a la portada
                </Button>
            </div>

        );
    }
}


.segmentsList:hover, .segmentsList.selected {
    background: black;
    color: white;
    cursor: pointer;
}