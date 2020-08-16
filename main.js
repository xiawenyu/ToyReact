import { createElement,Component,render} from "./ToyReact.js"
// window.Square = {}

class Square extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    render(){
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}
class Board extends Component{
    renderSuqare(i){
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={()=> this.props.onClick(i)}
            />
        )
       
    }
    render(){
        // window.Square[this.props['value']];
        return(
            <div>
                <div className="board-row">
                    {this.renderSuqare(0)}
                    {this.renderSuqare(1)}
                    {this.renderSuqare(2)}
                </div>
                <div className="board-row">
                    {this.renderSuqare(3)}
                    {this.renderSuqare(4)}
                    {this.renderSuqare(5)}
                </div>
                <div className="board-row">
                    {this.renderSuqare(6)}
                    {this.renderSuqare(7)}
                    {this.renderSuqare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step,move)=>{
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={()=> this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status;
        if (winner) {
            status = "Winner:" + winner;
        } else {
            status = "Next player:" + (this.state.xIsNext ? "X": "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares = {current.squares}
                        onClick = {i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )

    }
}


window.game = <Game />
render(window.game, document.getElementById('root'));

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a]===squares[b]&&squares[a]===squares[c]) {
            return squares[a];
        }

    }
    return null;
}

// let a = <Board />


// class MyComponent extends Component{
//     render(){
//         return <div>
//                     <span>Hello</span>
//                     <span>word</span>
//                     <div>
//                         {true}
//                         {this.children}
//                     </div>
//                 </div>
//     }
//     // setAttribute(name, value){
//     //     this[name] = value;
//     // }
//     // mountTo(parent){
//     //     let vdom = this.render();
//     //     vdom.mountTo(parent);
//     // }
// }

// let a = <MyComponent name="a" id="ida">
//     <div>123</div>
// </MyComponent>

// ToyReact.render(
//     a,
//     document.body
// );


// document.body.appendChild(a);